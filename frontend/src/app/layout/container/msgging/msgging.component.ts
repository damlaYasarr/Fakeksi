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
  senderid: number; //username'den id al
  sendername: string;
  msg_view: any;
  constructor(private router: Router, private userService: Userservice) {}
  //msg detail- like count
  ngOnInit(): void {
   
   this.getLastMsg(33);
  }
  AddComment(): void {
    //post eklenirken bu metodu
  }
  routing() {
    this.router.navigateByUrl('(bla:home/msgdetails)');
    console.log('here is routing');
  }
  getMsgginusers() {}
  deletecard(senderid: number) {}
  /*getUserName(uname:string){
    this.userService.getuserIdByName(uname).subscribe((res)=>{
        this.senderid=Number(res)
    })
   }*/

   
  getLastMsg(userid: number) {

    this.userService.getLastMsg(userid).subscribe((res) => {
      this.msg_view = res;

      this.senderid = this.msg_view[0].msg_sender_id;
      
     
    });
  }
  getName(id:number){
    this.userService.getUserNameById(id).subscribe(
      (res) => {
        this.sendername = String(res);
         this.sendername;
        console.log(this.sendername);
      },
      (error) => {
        console.error('Error fetching user name:', error);
      }
    );
  }
}
