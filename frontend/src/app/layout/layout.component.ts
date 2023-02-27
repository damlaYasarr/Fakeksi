import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { faUser, faMessage} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
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
    console.log(this.logincomponent)
      this.changebuttons();
   }
   changebuttons(){
    if(this.logincomponent.loading==true){
      this.authendricated=true;
    }
    return this.authendricated;
   }

   openFLowList(menulist:any){
    this.selectedList=menulist

   }

}
