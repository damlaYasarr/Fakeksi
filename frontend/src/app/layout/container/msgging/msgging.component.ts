import { Component, OnInit } from "@angular/core";
import { faUser, faMessage} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector:'msgging',
  //sayfayı komple kullan diyoruz
  templateUrl:'msgging.component.html',

})

export class MsggingComponent implements OnInit{
  constructor(){

  }

   ngOnInit(): void {

   }
   AddComment(): void{
    //post eklenirken bu metodu
   }
}
