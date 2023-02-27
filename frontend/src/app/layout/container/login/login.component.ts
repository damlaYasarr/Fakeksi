import { Component, OnInit} from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { User } from "src/app/models/user";
import { AuthenticationService } from "src/app/services/authenticationservice";


@Component({
  selector:'login_progress',
  //sayfayı komple kullan diyoruz
  templateUrl:'login.component.html',

})

//css düzenlenecek
export class LoginComponent implements OnInit {
  
   userid:any; //send info to the profile
   form: FormGroup;
   loading :boolean; //send info from child to parent
   submitted = false;
   isAdmin:boolean;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authservice: AuthenticationService,
        
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
        //it will be fixed
        if(this.form.value.email=='damla@hotmail.com'){
          this.router.navigateByUrl('/(vla:admin)');
          return;
        }
     
        this.authservice
        .login(this.form.value.email, this.form.value.password)
        .subscribe((response) => {
          
          this.loading=true;
          this.authservice.getusrid(this.form.value.email).subscribe((res)=>{

            this.userid=res
            localStorage.setItem('user_id', this.userid)
            
           })

          this.router.navigateByUrl('/(bla:home/profile)');
        });
        
    }

  }


    
  

