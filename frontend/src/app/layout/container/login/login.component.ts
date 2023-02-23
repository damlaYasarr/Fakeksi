import { Component, OnInit} from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { FormGroup, Validators } from '@angular/forms';


import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import { Userservice } from "src/app/services/userservices";

@Component({
  selector:'login_progress',
  //sayfayı komple kullan diyoruz
  templateUrl:'login.component.html',

})

//css düzenlenecek
export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor( private authService:Userservice, private router:Router) {}

  ngOnInit():void {
     console.log(this.isLoggedIn);

  }
   onSubmit(){
    
    const { email, password } = this.form;
    console.log(email,password);
    this.authService.loginProfile(email, password).subscribe({
      next: data => { 
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/profile']);
        
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        console.log(err);
       
      }
    });
  }
  public isTrue():boolean{
    if(this.isLoggedIn==true){
      return  true;
    }
    return false;
  }
   }

    
  

