import { Component, OnInit } from "@angular/core";
import { faUser, faMessage} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector:'msgging',
  //sayfayı komple kullan diyoruz
  templateUrl:'msgging.component.html',

})

export class MsggingComponent implements OnInit{
  constructor(private router:Router){

  }
//msg detail- like count
   ngOnInit(): void {

   }
   AddComment(): void{
    //post eklenirken bu metodu
   }
   routing(){
        this.router.navigateByUrl('(bla:home/msgdetails)')
        console.log("here is routing")
   }
   getMsgginusers(){

   }
}
