import { Component, OnInit } from "@angular/core";
import { faUser, faMessage} from '@fortawesome/free-solid-svg-icons'
import { HttpClient } from '@angular/common/http';
import { faDroplet , faListDots} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector:'notfound',
  //sayfayı komple kullan diyoruz
  templateUrl:'notfound.html',

})

export class Notfound implements OnInit{
 
  constructor(private httpClient:HttpClient){ }
  
ngOnInit(): void {

   }
  

   
}
