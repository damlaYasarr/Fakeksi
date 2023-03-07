import { Component} from "@angular/core";
import { EntryServices } from "src/app/services/entryservices";
import { faDroplet , faMessage, faListDots} from "@fortawesome/free-solid-svg-icons";
import { SharedService } from "src/app/services/simpleservice";

@Component({
  selector:'tagallentries',
  //sayfayı komple kullan diyoruz
  templateUrl:'tagallentries.component.html',

})
//css düzenlenecek
export class TagAllEntriesComponent{
 

  constructor(private entryservices: EntryServices, public sharedservice:SharedService){ }
  dailyflow:any;
  faDrop=faDroplet
  faMessageArrowUp=faMessage
  faListDot=faListDots
   id:number;
   ngOnInit(): void {
  this.getEntryies();
   }
  getEntryies(){

    this.sharedservice.getTagsAllEntriesByTagId().subscribe((res)=>{
  
      
      console.log(res)
    //  this.router.navigateByUrl(`http://localhost:4200/(bla:home/entrydetail/:${this.tagids})`);
   
    })
  }
  
   
}
