import { Component, OnInit} from "@angular/core";
import { EntryServices } from "src/app/services/entryservices";

import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { Userservice } from "src/app/services/userservices";
import { SharedService } from "src/app/services/simpleservice";

@Component({
  selector:'searchbox',
  //sayfayı komple kullan diyoruz
  templateUrl:'./searchbox.component.html',
  
})
//css düzenlenecek
export class SearchBoxComponent implements OnInit{
 dailyflow:any;
  getid:number;
  otherid:number;
 usernme:string;
 popup:boolean;
  constructor(private router: Router,
    public sharedid:SharedService,
     private entryservice:EntryServices,
     private userservice:Userservice){ }

 searchForm = new FormGroup({
  searchInput: new FormControl('')
});
 onSubmit() {
  if(String(this.searchForm.value.searchInput)==""){
    return;
  }
  this.entryservice.searchtagandname(String(this.searchForm.value.searchInput)).subscribe((res)=>{
   
  
    this.dailyflow = res;
    console.log(this.dailyflow);
    if(this.dailyflow.length==0){
      console.log("bu boş")
      this.popup=true;
    }
  });
}
onLineClick(list:any){
  console.log(list)
  
  if(list[0]!='@'){
     
    this.entryservice.getTagIdByName(String(list)).subscribe((res)=>{
      console.log(res)
      this.getid=Number(res)
      this.sharedid.changeId(this.getid);
      this.sharedid.tagname=String(list)
      this.router.navigateByUrl(`/(bla:home/entries/:${this.getid})`);
     
    })
  }else{
    this.usernme=String(list).slice(1);
    this.userservice.getuserIdByName(this.usernme).subscribe((res)=>{
      console.log(res)
      this.getid=Number(res)
      this.userservice.changeId(this.getid);
      this.router.navigateByUrl(`/(bla:home/user/:${this.getid})`);
      
    })
  }
}
   ngOnInit(): void {

   }
   
  
  
}
