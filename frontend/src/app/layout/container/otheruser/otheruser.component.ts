import { Component, OnInit } from '@angular/core';
import { faSmile, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';

import {
  faDroplet,
  faMessage,
  faListDots,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Userservice } from 'src/app/services/userservices';
import { SharedService } from 'src/app/services/simpleservice';

@Component({
  selector: 'otherusr',
  //sayfayı komple kullan diyoruz
  templateUrl: 'otheruser.component.html',
})
export class OtherUserComponent implements OnInit {
  profile: any;
  usr_id: number;
  user_id: number;
  faDrop = faDroplet;
  faMessageArrowUp = faMessage;
  faListDot = faListDots;
  profileinfo: any;
  entriesdetail: any;
  addfollow: boolean = true;
  constructor(
    public userservice: Userservice,

    private router: Router,
    public sharedservice: SharedService
  ) {
    //tanımlama yaparken kullanılır
  }

  faSmile = faSmile;
  facirclearrow = faCircleArrowUp;

  ngOnInit(): void {
    this.userservice.currentId.subscribe((id) => {
      console.log(id);
      this.user_id = Number(id);
      if (this.user_id == Number(localStorage.getItem('user_id'))) {
        this.router.navigateByUrl('/(bla:home/profile)');
      }
      this.getprofileinfo(this.user_id);
      this.getEntriesDetail(this.user_id);
      console.log(this.user_id);
    });
  }
 async getprofileinfo(id: number) {
    this.userservice.userProfileInfo(id).subscribe((res) => {
      this.profileinfo = res;
    });
  }
async  getEntriesDetail(id: number) {
    this.userservice.getUserAllEntries(id).subscribe((res) => {
      this.entriesdetail = res;
      console.log(this.entriesdetail);
    });
  }
 async addFollower() {
    console.log('takip et');

    console.log(Number(localStorage.getItem('user_id')), this.user_id);
    this.userservice
      .addFollower(Number(localStorage.getItem('user_id')), this.user_id)
      .subscribe((res) => {
        console.log(res);
        this.addfollow = true;
      });
  }
  removefollower() {
    console.log('console.log(takipten çık)');
    this.addfollow = false;
  }
}
