import { Component, OnInit} from "@angular/core";
import { EntryServices } from "src/app/services/entryservices";

import { Router } from "@angular/router";

@Component({
  selector:'searchbox',
  //sayfayı komple kullan diyoruz
  templateUrl:'searchbox.component.html',
  
})
//css düzenlenecek
export class SearchBoxComponent implements OnInit{
 
  result:any;
  constructor(private router: Router, private entryservice:EntryServices){ }
 /** açılır box yapılmalı. veritabanından filtreleme ile aynı isimleri
  * çekmeyi araştır. gelen kişi ise @ ile gelsin. tag ise normal yazı ile gelsin 
  * @ gelen kişi ise profile sayfasına git. 
  * takip et butonu ekle. o kişi nin id sini çek. 
  */
  
  
   ngOnInit(): void {
   
   }
   getlist(nn:string){
    this.entryservice.searchtagandname(nn).subscribe((res)=>{
          this.result=res;
          console.log(res);
    })
   }
  
  
   
}
