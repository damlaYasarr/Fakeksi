import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authenticationservice';
import { LayoutComponent } from '../../layout.component';
import { Location } from '@angular/common';
@Component({
  selector: 'login_progress',
  //sayfayı komple kullan diyoruz
  templateUrl: 'login.component.html',
})

//css düzenlenecek
export class LoginComponent implements OnInit {
  userid: any; //send info to the profile
  form: FormGroup;
  loading: boolean; //send info from child to parent
  submitted = false;

  isAdmin: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authservice: AuthenticationService, 
    private location:Location,
    private layoutComponent:LayoutComponent
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    //it will be fixed
    if (this.form.value.email == 'damla@hotmail.com') {
      this.router.navigateByUrl('/(vla:admin)');
      return;
    }

    this.authservice
      .login(this.form.value.email, this.form.value.password)
      .subscribe((response) => {
        this.loading = true;
      
        this.authservice.getusrid(this.form.value.email).subscribe((res) => {
          this.userid = res;
          //jwt setItem edilmeli. eğer sistemde jwt varsa o usern kullanıcı bilgileri çekilir.
          localStorage.setItem('user_id', this.userid);
          this.refreshPage();
           this.layoutComponent.classReferance.authendricated=true;
           
        });
  
        this.router.navigateByUrl('/(bla:home/profile)');
    
      });
  }
  refreshPage() {
    this.location.go(this.location.path());
    location.reload(); 
  }
  clickregsP() {
    this.router.navigateByUrl('(bla:home/(log:register))');
  }
  clickforgP() {
    this.router.navigateByUrl('(bla:home/(log:forgotpassword))');
  }
}
