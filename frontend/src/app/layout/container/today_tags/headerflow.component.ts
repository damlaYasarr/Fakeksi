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
   tagnumber:number; 
   
  constructor(private entryservices: EntryServices, 
              private router:Router){
         
               }
  dailyflow:any;
  gettag:string;
  faRotate=faRotateRight
    
  
   ngOnInit(): void {
  this.method();
   }
   onLineClick(list:any){
    this.gettag=list.tag;
    console.log(list.tag);
    this.entryservices.getTagIdByName(this.gettag).subscribe((res)=>{
      this.tagnumber=Number(res);
       this.entryservices.tagidforentities=this.tagnumber;
       console.log(this.tagnumber)
       this.tagnumber=0;
      
        
      
    })
   }
   method(){
    this.entryservices.getEntry().subscribe((data)=>{
     
      this.dailyflow=data;
     })
   }
}
