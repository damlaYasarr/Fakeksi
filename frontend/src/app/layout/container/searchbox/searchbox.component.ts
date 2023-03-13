import { Component, OnInit} from "@angular/core";
import { EntryServices } from "src/app/services/entryservices";
import { faDroplet , faMessage, faListDots} from "@fortawesome/free-solid-svg-icons";
import { SharedService } from "src/app/services/simpleservice";
import { ActivatedRoute, Route, Router } from "@angular/router";

@Component({
  selector:'searchbox',
  //sayfayı komple kullan diyoruz
  templateUrl:'searchbox.component.html',
  
})
//css düzenlenecek
export class SearchBoxComponent implements OnInit{
 
 
  constructor(private router: Router){ }
 
  
  
   ngOnInit(): void {
   
   }
  
  
  
   
}
