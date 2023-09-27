import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faDroplet,
  faMessage,
  faListDots,
} from '@fortawesome/free-solid-svg-icons';
import { EntryServices } from 'src/app/services/entryservices';
import { SharedService } from 'src/app/services/simpleservice';
@Component({
  selector: 'entry',
  //sayfayı komple kullan diyoruz
  templateUrl: 'commentContainer.component.html',
})
export class CommentComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private entryservice: EntryServices,
    private router: Router,
  ) {}
  entriesUser: any;
  entryid: number ;
  IsCliked: boolean = false;
  likecount: number;
  faDrop = faDroplet;
  faMessageArrowUp = faMessage;
  faListDot = faListDots;

  appurl = 'https://localhost:7095/api/TagEntry/getalltagandentrieswithUSER';

  //params kullanılır user id alınır-comment cart genişliği sabit kalmalı
 async getEntry() { 
  
  try {
    const number = localStorage.getItem('user_id');
    console.log(number);
    this.httpClient.get(this.appurl + Number(number)).subscribe((response) => {
      console.log(response);
      this.entriesUser = response;
    });
  } catch (error) {
    console.log(error);
  }
    
  }
  ngOnInit(): void {
   
    this.getEntry();
    this.entryservice.getLikeCount(this.entryid).subscribe((res) => {
      this.likecount = Number(res);
    });
  }

  addlike() {
    this.entryservice
      .addLike(Number(localStorage.getItem('user_id')), this.entryid)
      .subscribe((res) => {
        console.log('Response:', res);
        this.IsCliked = true;
      });
  }
  deletelike() {
    this.entryservice
      .deletelike(Number(localStorage.getItem('user_id')), this.entryid)
      .subscribe((res) => {
        console.log('Response:', res);
        this.IsCliked = false;
      });
  }

  logEntryName(name: string) {
    console.log('Clicked tagname:', name);
    this.entryservice.getEntyIdByName(name).subscribe((res) => {
      console.log(res);
      this.entryid = Number(res);
     
    });
  }
  
}
