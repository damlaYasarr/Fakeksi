import { Component, OnInit } from '@angular/core';
import { EntryServices } from 'src/app/services/entryservices';
import {
  faDroplet,
  faMessage,
  faListDots,
  faArrowDown,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'todayflow',
  //sayfayı komple kullan diyoruz
  templateUrl: 'todayflow.component.html',
})
//css düzenlenecek
export class Todayflow implements OnInit {
  faDrop = faDroplet;
  faMessageArrowUp = faMessage;
  faListDot = faListDots;
  constructor( 
    private enryservice: EntryServices,
   
  ) {}
  lists: any;

 

   ngOnInit():void {
    this.enryservice.gettodayflow().subscribe(res=>{
      this.lists=res;
      console.log(this.lists)
    })
  }

}
