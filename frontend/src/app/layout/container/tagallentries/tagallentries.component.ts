import { Component, OnInit,Input } from "@angular/core";
import { EntryServices } from "src/app/services/entryservices";
import { faDroplet , faMessage, faListDots} from "@fortawesome/free-solid-svg-icons";
import { HeaderFlowComponent } from "../today_tags/headerflow.component";
import {  Router } from "@angular/router";
import { SharedService } from "src/app/services/simpleservice";

@Component({
  selector:'tagallentries',
  //sayfayı komple kullan diyoruz
  templateUrl:'tagallentries.component.html',

})
//css düzenlenecek
export class TagAllEntriesComponent{
 

  constructor(private entryservices: EntryServices, private sharedservice:SharedService){ }
  dailyflow:any;
  faDrop=faDroplet
  faMessageArrowUp=faMessage
  faListDot=faListDots
  public tagseriousid:number;
   ngOnInit(): void {
    this.tagseriousid = this.sharedservice.tagseriousid;
  this.getEntryies();
   }
  getEntryies(){
    
    this.entryservices.getTagsAllEntriesByTagId(this.tagseriousid).subscribe((res)=>{
      this.dailyflow=res;
     // this.router.navigateByUrl(`http://localhost:4200/(bla:home/entrydetail/:${this.tagids})`);
   
    })
  }
  
   
}
