import { Component, OnInit} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Route, Router } from "@angular/router";
import { AuthenticationService } from "src/app/services/authenticationservice";


@Component({
  selector:'register',
  //sayfayı komple kullan diyoruz
  templateUrl:'register.component.html',

})

//css düzenlenecek
export class RegisterComponent implements OnInit {
  isRegister:boolean;
  searchForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
    constructor(private router:Router,
      private authservice:AuthenticationService){}
    ngOnInit(): void {
        
    }
    onSubmit(){ 
      this.authservice.register(String(this.searchForm.value.email),String(this.searchForm.value.password),
      String(this.searchForm.value.username)).subscribe(res=>{
        this.isRegister=true;
        this.router.navigateByUrl('(bla:home/login)');
      }, err=>{
        this.isRegister=false;
      })
       
    }
  }


    
  

