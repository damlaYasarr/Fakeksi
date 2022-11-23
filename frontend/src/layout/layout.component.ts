import { Component, OnInit } from "@angular/core";
import { faUser, faMessage} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

import { ProfileComponent } from "src/app/container/profile/profile.component";
@Component({
  selector:'product',
  //sayfayı komple kullan diyoruz
  templateUrl:'./layout.component.html',

})

export class LayoutComponent implements OnInit{
  display:boolean;
  constructor(){
    this.display=true
  }

   faUser=faUser
   faMessage=faMessage
   ngOnInit(): void {

   }
   profile=ProfileComponent

   onPress(){
      this.display=!this.display;
   }

}
