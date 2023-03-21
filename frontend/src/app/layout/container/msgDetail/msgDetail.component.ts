import { Component, OnInit } from "@angular/core";
import { faUser, faMessage} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector:'msgDetail',
  //sayfayı komple kullan diyoruz
  templateUrl:'msgDetail.component.html',

})

export class MsgDetailComponent implements OnInit{
  constructor(){

  }

   ngOnInit(): void {

   }
   AddComment(): void{
    //post eklenirken bu metodu
   }
}
