import { Component, OnInit } from "@angular/core";
import { faSmile, faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Userservice } from "src/app/services/userservices";
import { LayoutComponent } from "src/layout/layout.component";
import { Router } from "@angular/router";
@Component({
  selector:'profile',
  //sayfayı komple kullan diyoruz
  templateUrl:'profile.component.html',

})

export class ProfileComponent implements OnInit{
  constructor(private userservice:Userservice,
     private layoutcontainer:LayoutComponent,
     private router:Router){
    //tanımlama yaparken kullanılır
  }
  
  faSmile=faSmile
  facirclearrow=faCircleArrowUp
id:number;
  //get params
  //jwt kullan; backend düzenle. 
  //aadmin panel 
  //logout 
  //id senkronize olacak
   ngOnInit(): void {
    
   this.logout(this.id);
   }
   logout(id:number){
    this.userservice.logout(id); 
    this.layoutcontainer.authendricated=false;
   
   }
}
