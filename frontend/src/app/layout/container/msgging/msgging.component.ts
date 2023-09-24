import { Component, OnInit } from '@angular/core';
import { faUser, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Userservice } from 'src/app/services/userservices';
import { Observable } from 'rxjs';

@Component({
  selector: 'msgging',
  //sayfayı komple kullan diyoruz
  templateUrl: 'msgging.component.html',
})
export class MsggingComponent implements OnInit {
  senderid:number;
  urlid:number;
  msg_view: any;
  names:string;
  isOpencont:boolean=false;
  constructor(private router: Router, private userService: Userservice) {}
  //msg detail- like count
  ngOnInit(): void {
    this.getLastMsg(Number(localStorage.getItem('user_id')));
    
  }
  AddComment(): void {
    //post eklenirken bu metodu
  }
  routing() {
    this.userService.currendSnderName.subscribe(res=>{
      this.names=String(res).trim();

      }) 
      this.router.navigateByUrl(`(bla:home/msgdetails/:${this.names})`);
    //this.router.navigateByUrl(`bla:home/msgdetails/:${this.names}`);
    console.log('here is routing');
  }
  getMsgginusers() {}
  deletecard(senderid: number) {}
  

  getLastMsg(userid: number) {
    this.userService.getLastMsg(userid).subscribe(res  => {
      this.msg_view = res;
      
      console.log(res);
     
      if (Array.isArray(res)) {
   
        let number=0;
        while (res.length > number) {
       //if msg_open is false, turn allcolor to green
          const firstItem = res[number];
          if(!firstItem.isOpen){
            this.isOpencont=true
          }
        
          number=number+1; 
        }
      }
    });
  }

  getSenderName(name: string) {

    console.log(name);
  
    console.log(this.names)
    this.userService.changesendername(name)
  }
}
interface MessagesInterface{
  isOpen:boolean;
}