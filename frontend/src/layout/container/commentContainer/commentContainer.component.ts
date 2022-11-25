import { Component, OnInit } from "@angular/core";
import { faDroplet, faMessage, faListDots} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector:'entry',
  //sayfayı komple kullan diyoruz
  templateUrl:'commentContainer.component.html',

})

export class CommentComponent implements OnInit{
  constructor(){
    //tanımlama yaparken kullanılır
  }
faDrop=faDroplet
faMessageArrowUp=faMessage
faListDot=faListDots
   ngOnInit(): void {

   }

}
