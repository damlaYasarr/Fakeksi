import { Component, OnInit } from "@angular/core";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { EntryServices } from "src/app/services/entryservices";
@Component({
  selector:'login_progress',
  //sayfayı komple kullan diyoruz
  templateUrl:'login.component.html',

})
//css düzenlenecek
export class LoginProgress implements OnInit{
  constructor(){ }

    
  
   ngOnInit(): void {
    
   }
}
