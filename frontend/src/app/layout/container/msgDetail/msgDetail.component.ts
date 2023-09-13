import { Component, OnInit } from "@angular/core";
import { faUser, faMessage} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { FormControl, FormGroup } from "@angular/forms";
import { Userservice } from "src/app/services/userservices";
import { Location } from '@angular/common';
@Component({
  selector:'msgDetail',
  //sayfayı komple kullan diyoruz
  templateUrl:'msgDetail.component.html',

})

export class MsgDetailComponent implements OnInit{
  msg: string[] = [];
  sendername:string
  sending_msg:boolean;
  receiv:boolean;
  listall:any;
  senderid:number;
  isleft=false;
  constructor(private userService:Userservice, 
    private location: Location){
   
  }
  searchForm = new FormGroup({
    searchInput: new FormControl('')
  });
  onSubmit(event : MouseEvent) {
   
    event.preventDefault();
    this.sending_msg=true;
    console.log(this.searchForm.value.searchInput);
    
    this.msg.push(String(this.searchForm.value.searchInput));
    this.SendMsg(24, 30, String(this.searchForm.value.searchInput));
    this.searchForm.patchValue({searchInput: ""});
  }
   ngOnInit(): void {
    this.userService.currendSnderName.subscribe(res=>{
      this.sendername=res
      }) 
   this.listallmsg(24,30);
  
   }
   //after sending msg, refresh the page bc of non used socket
   refreshPage() {
    this.location.go(this.location.path());
    location.reload(); 
  }

    SendMsg(id:number,senderid:number, txt:string){
      this.userService.sendMsg(id,senderid,txt).subscribe((res)=>{
               console.log(res);
           this.refreshPage();
      })
   }
   listallmsg(usr1:number, usr2:number){
    this.userService.listallmag(usr1,usr2).subscribe((res)=>{
     this.listall=res;  
     
     console.log(res)
    })
   }
   getUserNameById(name:string){
    this.userService.getuserIdByName(name).subscribe((res)=>{
               this.senderid=Number(res);
    })
   }
}

