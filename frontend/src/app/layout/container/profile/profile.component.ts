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
     private router:Router){
    //tanımlama yaparken kullanılır
  }
  
  faSmile=faSmile
  facirclearrow=faCircleArrowUp
  //entry içine user id gönderilmeli
id:number;
  //get params
  //jwt kullan; backend düzenle. 
  //aadmin panel 
  //logout 
  //id senkronize olacak
   ngOnInit(): void {
    

   }  

 
}
