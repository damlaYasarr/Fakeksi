import { Component, OnInit } from "@angular/core";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector:'header_flow',
  //sayfayı komple kullan diyoruz
  templateUrl:'headerflow.component.html',

})

export class HeaderFlowComponent implements OnInit{
  constructor(){
    //tanımlama yaparken kullanılır
  }
  faRotate=faRotateRight
   ngOnInit(): void {

   }
}
