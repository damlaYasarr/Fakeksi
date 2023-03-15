import { Component, OnInit} from "@angular/core";
import { EntryServices } from "src/app/services/entryservices";

import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector:'searchbox',
  //sayfayı komple kullan diyoruz
  templateUrl:'./searchbox.component.html',
  
})
//css düzenlenecek
export class SearchBoxComponent implements OnInit{
 dailyflow:any;
  constructor(private router: Router, private entryservice:EntryServices){ }

 searchForm = new FormGroup({
  searchInput: new FormControl('')
});
 onSubmit() {
  if(String(this.searchForm.value.searchInput)==""){
    return;
  }
    this.entryservice.searchtagandname(String(this.searchForm.value.searchInput)).subscribe((res)=>{
          this.dailyflow=res;
          console.log(res)
    })
}
   ngOnInit(): void {

   }
   
    
 
  
}
