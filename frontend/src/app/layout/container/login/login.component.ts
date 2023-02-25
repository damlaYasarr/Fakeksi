import { Component, OnInit} from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { FormGroup, Validators } from '@angular/forms';

import { HttpClient,HttpHeaders } from "@angular/common/http";

import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/services/authenticationservice";
import { Userservice } from "src/app/services/userservices";
import { User } from "src/app/models/user";


@Component({
  selector:'login_progress',
  //sayfayı komple kullan diyoruz
  templateUrl:'login.component.html',

})

//css düzenlenecek
export class LoginComponent implements OnInit {
  


form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
       private http:HttpClient,
        private router: Router,
        private authservice: Userservice,
        
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields


    onSubmit() {
        this.submitted = true;

        if (this.form.invalid) {
            return;
        }
        this.authservice
        .loginProfile(this.form.value.email, this.form.value.password)
        .subscribe((response) => {
          this.router.navigateByUrl('/(bla:home/profile)');
        });
        
    }
  }
  /**  ********
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  loginForm:FormGroup;
  constructor( private httpclient:HttpClient, private router:Router, 
   
    private formBuilder:FormBuilder
    ) {}

  ngOnInit():void {
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["", Validators.required],
      password:["", Validators.required]
    })
  }

  login(){
    
      console.log(this.loginForm.valid);
       console.log(this.loginForm.value)
       const email=this.loginForm.value.email;
       const password=this.loginForm.value.password;
       console.log(email, password)
      
       this.httpclient.post(this.API, {email,password}).subscribe({
        next: data => { 
          console.log(data)
          this.router.navigateByUrl('/(bla:home/profile)');
          
        },
        error: err => {
         
          console.log(err);
         
        }
      });
    }
  
   }
  */

    
  

