import { Component, OnInit } from "@angular/core";
import {  faDroplet , faListDots,faMessage} from '@fortawesome/free-solid-svg-icons'
import { HttpClient } from '@angular/common/http';
import { EntryServices } from "src/app/services/entryservices";



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
  
  constructor(private entryService:EntryServices){ }
  //one tag one entry
  //tag başlığına tıklayınca idsini al. consola yaz. 
  //buradan tekrar tag all entries ksımına yönlendir. 
  //router link isimlerideğişmeli araştır.
ngOnInit(): void {
  this.entryService.getDailyOneTagAndOneEntry().subscribe((res)=>{
    console.log(res)
    this.entries=res
  })
   }



   
}
