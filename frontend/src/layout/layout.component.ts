import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { faUser, faMessage} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { ProfileComponent } from "./container/profile/profile.component";
import { MsggingComponent } from "./container/msgging/msgging.component";
import { DailyFLow } from "./container/daily-flow/daily-flow.component";
import { LoginComponent } from "./container/login/login.component";


@Component({
  selector:'product',
  //sayfayı komple kullan diyoruz
  templateUrl:'./layout.component.html',

})

export class LayoutComponent{

  constructor(  private router: Router){

  }
   //eğer loginde giriş yapılmadı ise profile ve msg kapanacak
   
   faUser=faUser
   faMessage=faMessage
   logincomponent:LoginComponent;
   
  authendricated=false;
   selectedList:any
   menulist=['eksi','msg','profile']
   
   
   ngOnInit() :void{
     if(this.logincomponent.isTrue()){
      this.authendricated=true;
     }else{
      this.authendricated=false;
     }
      
   }
   

   openFLowList(menulist:any){
    this.selectedList=menulist

   }

}
