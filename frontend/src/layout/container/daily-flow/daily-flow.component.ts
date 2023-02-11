import { Component, OnInit } from "@angular/core";
import { faUser, faMessage} from '@fortawesome/free-solid-svg-icons'
import { HttpClient } from '@angular/common/http';
import { faDroplet , faListDots} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector:'dataflow',
  //sayfayı komple kullan diyoruz
  templateUrl:'daily-flow.component.html',

})

export class DailyFLow implements OnInit{
  faDrop=faDroplet
  faMessageArrowUp=faMessage
  faListDot=faListDots
  entries:any;
 
  constructor(private httpClient:HttpClient){ }
  
ngOnInit(): void {

   }
  

   
}
