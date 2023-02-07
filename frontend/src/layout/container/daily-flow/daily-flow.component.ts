import { Component, OnInit } from "@angular/core";
import { faUser, faMessage} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector:'dataflow',
  //sayfayı komple kullan diyoruz
  templateUrl:'daily-flow.component.html',

})

export class DailyFLow implements OnInit{
   display:boolean
  constructor(){
     this.display=false
  }
  getConfig() {
   return this.http.get(this.configUrl);
 }
   ngOnInit(): void {

   }
   AddComment(): void{
    //post eklenirken bu metodu
   }
}
