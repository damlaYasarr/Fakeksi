import { Component, OnInit } from "@angular/core";
import { faSmile, faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector:'profile',
  //sayfayı komple kullan diyoruz
  templateUrl:'profile.component.html',

})

export class ProfileComponent implements OnInit{
  constructor(){
    //tanımlama yaparken kullanılır
  }
  faSmile=faSmile
  facirclearrow=faCircleArrowUp
   ngOnInit(): void {

   }

}
