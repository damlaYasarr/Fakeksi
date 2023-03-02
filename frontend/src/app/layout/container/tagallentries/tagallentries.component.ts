import { Component, OnInit } from "@angular/core";
import { EntryServices } from "src/app/services/entryservices";
import { faDroplet , faMessage, faListDots} from "@fortawesome/free-solid-svg-icons";
import { HeaderFlowComponent } from "../today_tags/headerflow.component";

@Component({
  selector:'tagallentries',
  //sayfayı komple kullan diyoruz
  templateUrl:'tagallentries.component.html',

})
//css düzenlenecek
export class TagAllEntriesComponent implements OnInit{

  constructor(private entryservices: EntryServices 
   ){ }
  dailyflow:any;
  faDrop=faDroplet
  faMessageArrowUp=faMessage
  faListDot=faListDots
    
   ngOnInit(): void {

  this.getEntryies();

   }
  getEntryies(){

 console.log(this.entryservices.tagidforentities);

    this.entryservices.getTagsAllEntriesByTagId( 1).subscribe((res)=>{
      this.dailyflow=res;
       
      
    })
  }
   
}
