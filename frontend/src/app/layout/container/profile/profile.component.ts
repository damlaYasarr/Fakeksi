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
 // resimUrl:string="data:image/jpeg;base64,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";
  constructor(
     private userservice:Userservice,
     private authservice:AuthenticationService,
     private router:Router,
     private logoutLayout:LayoutComponent){
    //tanımlama yaparken kullanılır
  }
  secilenDosya: File;
  dosyaSec(event: Event) {
    const dosyaSecmeOlayi = event as Event & { target: { files: FileList } };
    this.secilenDosya = dosyaSecmeOlayi.target.files[0];
  }
  resimYukle(){
// <input type="file" (change)="dosyaSec($event)">
   this.userservice.adduserPhoto(1, './images/').subscribe((res)=>{
       
   })
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
