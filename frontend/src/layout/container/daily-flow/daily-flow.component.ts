import { Component, OnInit } from "@angular/core";
import { faUser, faMessage} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

import { EntryResponseModels } from "src/app/models/EntryResponseModel";
import { HttpClient } from '@angular/common/http';
import { faDroplet , faListDots} from "@fortawesome/free-solid-svg-icons";
import { Entryflow } from "src/app/models/Entryflow";

@Component({
  selector:'dataflow',
  //sayfayı komple kullan diyoruz
  templateUrl:'daily-flow.component.html',

})

export class DailyFLow implements OnInit{
  faDrop=faDroplet
  faMessageArrowUp=faMessage
  faListDot=faListDots
    entries:Entryflow[]=[];
    entriesResponseModel:EntryResponseModels={
     data:this.entries,
     message:"",
     success:true
    };
  constructor(private httpClient:HttpClient){
   
  }

  
 
apiURL="https://localhost:7095/api/TagEntry/getalltagandentrieswithUSER1";
  
ngOnInit(): void {
  this.httpClient.get<EntryResponseModels>(this.apiURL).subscribe((response)=>{
    this.entries=response.data
    console.log(response.data)
 })

   }
  

   
}
