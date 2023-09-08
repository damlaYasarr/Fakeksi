import { Component, OnInit } from '@angular/core';
import { faUser, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Userservice } from 'src/app/services/userservices';
import { Observable } from 'rxjs';

@Component({
  selector: 'msgging',
  //sayfayı komple kullan diyoruz
  templateUrl: 'msgging.component.html',
})
export class MsggingComponent implements OnInit {
  senderid: number; //username'den id al
  msg_view: any;
  constructor(private router: Router, private userService: Userservice) {}
  //msg detail- like count
  ngOnInit(): void {
    this.getLastMsg(24);
  }
  AddComment(): void {
    //post eklenirken bu metodu
  }
  routing() {
    this.router.navigateByUrl('(bla:home/msgdetails)');
    console.log('here is routing');
  }
  getMsgginusers() {}
  deletecard(senderid: number) {}


  getLastMsg(userid: number) {
    this.userService.getLastMsg(userid).subscribe((res) => {
      this.msg_view = res;
      console.log(res);
    });
  }

  getSenderName(name: string) {
    console.log(name);
  }
}
