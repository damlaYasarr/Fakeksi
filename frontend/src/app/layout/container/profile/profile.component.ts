import { Component, OnInit } from "@angular/core";
import { faSmile, faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";


import { Router } from "@angular/router";
import { LayoutComponent } from "../../layout.component";
import { AuthenticationService } from "src/app/services/authenticationservice";

@Component({
  selector:'profile',
  //sayfayı komple kullan diyoruz
  templateUrl:'profile.component.html',

})

export class ProfileComponent implements OnInit{
  constructor(
     private authservice:AuthenticationService,
     private router:Router,
     private logoutLayout:LayoutComponent){
    //tanımlama yaparken kullanılır
  }
  
  faSmile=faSmile
  facirclearrow=faCircleArrowUp

   ngOnInit(): void {
  

   }  

   onClick(){
    this.authservice.logout();
    console.log('çıkış yapıldı')
    this.logoutLayout.classReferance.authendricated=false;
    this.router.navigateByUrl('/(bla:home/daily)');
   }

 
}
