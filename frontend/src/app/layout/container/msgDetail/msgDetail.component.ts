import { Component, OnInit } from "@angular/core";
import { faUser, faMessage} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { FormControl, FormGroup } from "@angular/forms";
import { Userservice } from "src/app/services/userservices";

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
  constructor(private userService:Userservice){

  }
  searchForm = new FormGroup({
    searchInput: new FormControl('')
  });
  onSubmit(event : MouseEvent) {
   
    event.preventDefault();
    this.sending_msg=true;
    console.log(this.searchForm.value.searchInput);
    this.msg.push(String(this.searchForm.value.searchInput));
    this.searchForm.patchValue({searchInput: ""});
  }
   ngOnInit(): void {
    this.userService.currendSnderName.subscribe(res=>{
      this.sendername=res
      })
   }
   SendMsg(id:number,senderid:number, txt:string){
      this.userService.sendMsg(id,senderid,txt).subscribe((res)=>{
               console.log(res);
      })
   }
}

