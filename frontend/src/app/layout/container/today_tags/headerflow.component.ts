import { Component, OnInit } from "@angular/core";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { EntryServices } from "src/app/services/entryservices";

@Component({
  selector:'header_flow',
  //sayfayı komple kullan diyoruz
  templateUrl:'headerflow.component.html',

})
//css düzenlenecek
export class HeaderFlowComponent implements OnInit{
  constructor(public entryservices: EntryServices){ }
  dailyflow:any;
  
  faRotate=faRotateRight
    
  
   ngOnInit(): void {
  this.method();
   }
   method(){
    this.entryservices.getEntry().subscribe((data)=>{
      console.log(data)
      this.dailyflow=data;
     })
   }
}
