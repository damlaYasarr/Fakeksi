import { Component, OnInit} from "@angular/core";
import { EntryServices } from "src/app/services/entryservices";
import { faDroplet , faMessage, faListDots} from "@fortawesome/free-solid-svg-icons";
import { SharedService } from "src/app/services/simpleservice";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Component({
  selector:'tagallentries',
  //sayfayı komple kullan diyoruz
  templateUrl:'tagallentries.component.html',
  
})
//css düzenlenecek
export class TagAllEntriesComponent implements OnInit{
 
 tagid:number;
 definition:string;
 user_localid:number;
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
    this.definition=String(this.searchForms.value.searchInputs);
   
    this.user_localid=Number(localStorage.getItem('user_id'))
    console.log(this.user_localid,this.definition, this.tagid )
    this.enryservice.addEntry(this.user_localid, this.tagid, this.definition)
    .subscribe((res) => {
      console.log('Başarılı işlem: ', res);
      this.router.navigateByUrl(`/(bla:home/entries/:${this.tagid})`);
    
    });
   
   
  }

 
}
