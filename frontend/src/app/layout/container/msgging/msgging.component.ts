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
  constructor(private router:Router, private userService:Userservice){

  }
//msg detail- like count
   ngOnInit(): void {

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
}
