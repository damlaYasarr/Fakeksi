import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { faUser, faMessage} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { ProfileComponent } from "./container/profile/profile.component";
import { MsggingComponent } from "./container/msgging/msgging.component";
import { DailyFLow } from "./container/daily-flow/daily-flow.component";


@Component({
  selector:'product',
  //sayfayı komple kullan diyoruz
  templateUrl:'./layout.component.html',

})

export class LayoutComponent implements OnInit{

  constructor(){

  }

   faUser=faUser
   faMessage=faMessage

   selectedList:any
   menulist=['eksi','msg','profile']
   ngOnInit() :void{

   }


   openFLowList(menulist:any){
    this.selectedList=menulist

   }

}
