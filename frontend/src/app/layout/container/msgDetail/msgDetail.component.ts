import { Component, OnInit } from "@angular/core";
import { faUser, faMessage} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector:'msgDetail',
  //sayfayı komple kullan diyoruz
  templateUrl:'msgDetail.component.html',

})

export class MsgDetailComponent implements OnInit{
  msg: string[] = [];
 
  sending_msg:boolean;
  receiv:boolean;
  constructor(){

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

   }
   AddComment(): void{
    //post eklenirken bu metodu
   }
}
