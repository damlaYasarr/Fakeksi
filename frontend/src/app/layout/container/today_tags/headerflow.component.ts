import { Component, OnInit,Output, EventEmitter } from "@angular/core";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { EntryServices } from "src/app/services/entryservices";
import { Router } from "@angular/router";
import { BehaviorSubject } from 'rxjs';
@Component({
  selector:'header_flow',
  templateUrl:'headerflow.component.html',

})

export class HeaderFlowComponent implements OnInit{
  //use how to send data from child to child
   
  
  constructor(private entryservices: EntryServices, 
              private router:Router){
       
               }
  dailyflow:any;
  gettag:string;
  faRotate=faRotateRight
  tagids:number;
  
   ngOnInit(): void {
  this.method();

   }
   onLineClick(list:any){
    this.gettag=list.tag;
    console.log(list.tag);
    
    this.entryservices.getTagIdByName(this.gettag).subscribe((res)=>{
      this.tagids=Number(res);
      this.entryservices.tagidforentities=this.tagids;
      localStorage.setItem('tgid', String(this.tagids));
    })
   }
   method(){
    this.entryservices.getEntry().subscribe((data)=>{
     
      this.dailyflow=data;
     })
   }
  
}
