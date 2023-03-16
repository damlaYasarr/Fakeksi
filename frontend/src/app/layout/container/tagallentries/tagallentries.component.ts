import { Component, OnInit} from "@angular/core";
import { EntryServices } from "src/app/services/entryservices";
import { faDroplet , faMessage, faListDots} from "@fortawesome/free-solid-svg-icons";
import { SharedService } from "src/app/services/simpleservice";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";

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
  searchForms = new FormGroup({
    searchInputs: new FormControl('')
  });
  
   ngOnInit(): void {
    
    this.sharedservice.currentId.subscribe(id => {
      this.tagid = Number(id);
      this.getEntryies(this.tagid); 
    });
   //this.addentries(localStorage.getItem('user_id'),this.tagid  )
   }
  
  getEntryies(id:number){
    this.enryservice.getTagsAllEntriesByTagId(id).subscribe((res)=>{
      this.dailyflow=res;
      this.router.navigateByUrl(`/(bla:home/entries/:${id})`);
    })
   
  }
  
  entryadd(){
    console.log(Number(localStorage.getItem('user_id')),this.searchForms.value.searchInputs, this.tagid )
    this.enryservice.addEntry(Number(localStorage.getItem('user_id')), this.tagid,String(this.searchForms.value.searchInputs)).subscribe((res)=>{
       console.log(res)
    })
  }
  /*addentries(usr_id: number,tag_id:number, def:string ){
   //kullanıcı id si ile entry eklenir
  
  }*/
  
   
}
