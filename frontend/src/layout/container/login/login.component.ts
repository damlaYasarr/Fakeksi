import { Component} from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { userservice } from "src/app/services/userservices";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector:'login_progress',
  //sayfayı komple kullan diyoruz
  templateUrl:'login.component.html',

})

//css düzenlenecek
export class LoginProgress {

  constructor(private formBuilder:FormBuilder, private toastrService:ToastrService, private userservice:userservice ){ }
  isLoading = false;
 
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.userservice.loginProfile(form.value.email, form.value.password);
   }
   ngOnInit(): void {
    
   }

}
