import { Component, OnInit,Output, EventEmitter } from "@angular/core";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { EntryServices } from "src/app/services/entryservices";
import { Router } from "@angular/router";
import { BehaviorSubject } from 'rxjs';
import { SharedService } from "src/app/services/simpleservice";
@Component({
  selector:'header_flow',
  templateUrl:'headerflow.component.html',

})


 
export class HeaderFlowComponent {
  //use how to send data from child to child
  
  constructor(private entryservices: EntryServices, private sharedid:SharedService){ }
  dailyflow:any;
  gettag:string;
  faRotate=faRotateRight
   public tagsid:number;
  
   ngOnInit(): void {
  this.method();

   }
   onLineClick(list:any){
    this.gettag=list.tag;
    console.log(list.tag);
     
    this.entryservices.getTagIdByName(this.gettag).subscribe((res)=>{
      
      this.tagsid=Number(res)
      this.sharedid.tagseriousid=this.tagsid
      
      
      console.log(this.tagsid);
    
    })
   }
   method(){
    this.entryservices.getEntry().subscribe((data)=>{
     
      this.dailyflow=data;
    
     })
   }
  
}
