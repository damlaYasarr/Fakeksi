import { Component, OnInit } from "@angular/core";
import { faUser, faMessage} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { EntryFlow } from "src/app/models/entryflow";

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
  entries:EntryFlow[]=[ ];
 // getConfig() {
  // return this.http.get(this.configUrl);
 //}
   ngOnInit(): void {

   }
   AddComment(): void{
    //post eklenirken bu metodu
   }
}
