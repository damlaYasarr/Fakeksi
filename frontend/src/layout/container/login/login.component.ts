import { Component} from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { userservice } from "src/app/services/userservices";
import { ToastrService } from 'ngx-toastr';
import { Rounded } from "@coreui/angular/lib/utilities/rounded.type";
import { Router } from "@angular/router";
@Component({
  selector:'login_progress',
  //sayfayı komple kullan diyoruz
  templateUrl:'login.component.html',

})

//css düzenlenecek
export class LoginComponent {

  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private authService:userservice, private router:Router) {}

  ngOnInit():void {
    this.createLoginForm();
    this.login();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["", Validators.required],
      password:["", Validators.required]
    })
  }

 public login(){
    if(this.loginForm.valid){
      this.authService.loginProfile(this.loginForm.value.email, this.loginForm.value.password ).subscribe(response=>{
        console.log(response)
        if(response.success){
          console.log("giriş yapamazsın");
        }
          this.router.navigate(['/profile']);
        
      });
    
      }
      return this.loginForm.valid;
    }
  

}
