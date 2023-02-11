import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector:'header_flow',
  //sayfayı komple kullan diyoruz
  templateUrl:'headerflow.component.html',

})
//css düzenlenecek
export class HeaderFlowComponent implements OnInit{
  constructor(private httpClient:HttpClient){ }
  dailyflow:any;
  apiURL="https://localhost:7095/api/TagEntry/GetTagandcount";
  faRotate=faRotateRight
    getDaily(){
    this.httpClient.get(this.apiURL).subscribe(response=>{
    
      this.dailyflow=response
     
   })
  }
   ngOnInit(): void {
      this.getDaily();
   }
}
