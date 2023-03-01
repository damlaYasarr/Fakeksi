import { Component, OnInit } from "@angular/core";
import { faSmile, faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";


import { Router } from "@angular/router";
import { LayoutComponent } from "../../layout.component";
import { AuthenticationService } from "src/app/services/authenticationservice";
import { Userservice } from "src/app/services/userservices";

@Component({
  selector:'profile',
  //sayfayı komple kullan diyoruz
  templateUrl:'profile.component.html',

})

export class ProfileComponent implements OnInit{
  profile:any;
  usr_id:number;
  constructor(
     private userservice:Userservice,
     private authservice:AuthenticationService,
     private router:Router,
     private logoutLayout:LayoutComponent){
    //tanımlama yaparken kullanılır
  }
  
  faSmile=faSmile
  facirclearrow=faCircleArrowUp

   ngOnInit(): void {
  
this.getprofile();
   }  
   getprofile(){

    const info=localStorage.getItem("user_id");//just the usual way 
     this.usr_id=Number(info);
    this.userservice.userProfileInfo(this.usr_id).subscribe((res)=>{
      this.profile=res;
      console.log(res);
    })
   }
   onClick(){
    this.authservice.logout();
    console.log('çıkış yapıldı')
    this.logoutLayout.classReferance.authendricated=false;
    this.router.navigateByUrl('/(bla:home/daily)');
   }

 
}
