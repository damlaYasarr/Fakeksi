import { Component, OnInit } from "@angular/core";
import { faUser, faMessage} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { Userservice } from "src/app/services/userservices";

@Component({
  selector:'msgging',
  //sayfayı komple kullan diyoruz
  templateUrl:'msgging.component.html',

})

export class MsggingComponent implements OnInit{
  senderid:number; //username'den id al
  sendername:string;
  msgThumbnail:string;
  constructor(private router:Router, private userService:Userservice){

  }
//msg detail- like count
   ngOnInit(): void {
    this.getLastmsg(0,this.senderid);
   }
   AddComment(): void{
    //post eklenirken bu metodu
   }
   routing(){
        this.router.navigateByUrl('(bla:home/msgdetails)')
        console.log("here is routing")
   }
   getMsgginusers(){

   }
   deletecard(senderid:number){

   }
   getUserName(uname:string){
    this.userService.getuserIdByName(uname).subscribe((res)=>{
        this.senderid=Number(res)
    })
   }
   getUserNameById(senderid:number){
    this.userService.getUserNameById(senderid).subscribe((res)=>{
  this.sendername=String(res);
})
   }
   getLastmsg(id:number, senderid:number){
    this.userService.getLastMsg(id=0, senderid).subscribe((res)=>{
        this.msgThumbnail=String(res);
    })
   }
}
