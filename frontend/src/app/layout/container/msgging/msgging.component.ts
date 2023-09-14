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
  constructor(private router: Router, private userService: Userservice) {}
  //msg detail- like count
  ngOnInit(): void {
    this.getLastMsg(24);
    
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
    this.userService.getLastMsg(userid).subscribe((res) => {
      this.msg_view = res;
      console.log(res);
    });
  }

  getSenderName(name: string) {

    console.log(name);
  
    console.log(this.names)
    this.userService.changesendername(name)
  }
}
