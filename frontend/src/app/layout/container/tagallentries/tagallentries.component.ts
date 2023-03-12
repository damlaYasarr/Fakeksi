import { Component, OnInit} from "@angular/core";
import { EntryServices } from "src/app/services/entryservices";
import { faDroplet , faMessage, faListDots} from "@fortawesome/free-solid-svg-icons";
import { SharedService } from "src/app/services/simpleservice";
import { ActivatedRoute, Route, Router } from "@angular/router";

@Component({
  selector:'tagallentries',
  //sayfayı komple kullan diyoruz
  templateUrl:'tagallentries.component.html',
  
})
//css düzenlenecek
export class TagAllEntriesComponent implements OnInit{
 
 tagid:number;
  constructor(private router: Router, public sharedservice:SharedService, 
    private enryservice:EntryServices){ }
  dailyflow:any;
  faDrop=faDroplet
  faMessageArrowUp=faMessage
  faListDot=faListDots 
  
  
   ngOnInit(): void {
    this.sharedservice.currentId.subscribe(id => {
      
      this.tagid = Number(id);
      console.log(this.tagid)  
      this.getEntryies(this.tagid);  
    });
   this.addentries(localStorage.getItem('user_id'),this.tagid  )
   }
  
  getEntryies(id:number){
    this.enryservice.getTagsAllEntriesByTagId(id).subscribe((res)=>{
      this.dailyflow=res;
      
      this.router.navigateByUrl(`(bla:home/entrydetail/:${id})`);
      console.log(res)
    })
   
  }
  addentries(usr_id: number,tag_id:number, def:string ){
   //kullanıcı id si ile entry eklenir
   this.enryservice.addEntry(usr_id, tag_id,def).subscribe((res)=>{
       
   })
  }
  
   
}
