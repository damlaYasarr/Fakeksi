import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { faDroplet , faMessage, faListDots} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector:'entry',
  //sayfayı komple kullan diyoruz
  templateUrl:'commentContainer.component.html',

})

export class CommentComponent implements OnInit{
 
  constructor(private httpClient:HttpClient){ }
  entriesUser:any;
  
faDrop=faDroplet
faMessageArrowUp=faMessage
faListDot=faListDots
appurl="https://localhost:7095/api/TagEntry/getalltagandentrieswithUSER";

//params kullanılır user id alınır-comment cart genişliği sabit kalmalı
  getEntry(){
    const number=localStorage.getItem('user_id');
    console.log(number);
    this.httpClient.get(this.appurl+number).subscribe(response=>{
    
      this.entriesUser=response
     
   })
  }
ngOnInit(): void {
this.getEntry();

   }
  

}
