import { Component, OnInit} from "@angular/core";
import { EntryServices } from "src/app/services/entryservices";

import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { Userservice } from "src/app/services/userservices";

@Component({
  selector:'searchbox',
  //sayfayı komple kullan diyoruz
  templateUrl:'./searchbox.component.html',
  
})
//css düzenlenecek
export class SearchBoxComponent implements OnInit{
 dailyflow:any;
 getid:number;
 usernme:string;
  constructor(private router: Router,
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
          this.dailyflow=res;
          console.log(res)
    })
}
onLineClick(list:any){
  console.log(list)
  if(list[0]=='@'){
    this.usernme=String(list).slice(1);
    this.userservice.getuserIdByName(this.usernme).subscribe((res)=>{
      console.log(res)
      this.router.navigateByUrl(`(bla:home/profile)`);
    })
    
  }else{
    this.entryservice.getTagIdByName(String(list)).subscribe((res)=>{
      console.log(res)
      this.getid=Number(res)
    
      this.router.navigateByUrl(`(bla:home/entrydetail/:${this.getid})`);
    })
  }


}
   ngOnInit(): void {

   }
   
    
 
  
}
