import { Component, OnInit } from '@angular/core';
import { faUser, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Userservice } from 'src/app/services/userservices';
import { Location } from '@angular/common';
@Component({
  selector: 'msgDetail',
  //sayfayı komple kullan diyoruz
  templateUrl: 'msgDetail.component.html',
})
export class MsgDetailComponent implements OnInit {
  msg: string[] = [];
  sendername: string;
  sender_id: number;
  sending_msg: boolean;
  receiv: boolean;
  listall: any;
  isleft = false;
  constructor(
    private userService: Userservice,
    private router: Router,
    private location: Location,
  ) {}
  searchForm = new FormGroup({
    searchInput: new FormControl(''),
  });
  onSubmit(event: MouseEvent) {
    event.preventDefault();
    if (
      this.searchForm.value.searchInput != null &&
      this.searchForm.value.searchInput.trim() !== ''
    ) {
      this.sending_msg = true;

      console.log(this.searchForm.value.searchInput);

      this.msg.push(String(this.searchForm.value.searchInput));

      this.SendMsg(
        this.sender_id,
        Number(localStorage.getItem('user_id')),
        String(this.searchForm.value.searchInput),
      );
      this.searchForm.patchValue({ searchInput: '' });
    } else {
      // Boş bir mesajı göndermeye çalışıyorsunuz, burada uygun bir işlem yapabilirsiniz.
      alert('Boş mesaj gönderilemez!');
      console.log('Boş mesaj gönderilemez!');
    }
  }
  ngOnInit() {
    this.userService.currendSnderName.subscribe((res) => {
      this.sendername = res;
    });
    console.log(this.sendername);
    this.userService.getuserIdByName(this.sendername).subscribe((rs) => {
      this.sender_id = Number(rs);
      console.log(this.sender_id);
      this.userService
        .listallmag(this.sender_id, Number(localStorage.getItem('user_id')))
        .subscribe((res) => {
          this.listall = res;

          console.log(res);
        });
    });
  }
  //after sending msg, refresh the page bc of non used socket
  refreshPage() {
    this.location.go(this.location.path());
    location.reload();
  }

  SendMsg(id: number, senderid: number, txt: string) {
    this.userService.sendMsg(id, senderid, txt).subscribe((res) => {
      console.log(res);
   
      this.router.navigateByUrl(`(bla:home/msgdetails/:${this.sendername.trim()})`);
      this.userService
        .listallmag(this.sender_id, Number(localStorage.getItem('user_id')))
        .subscribe((res) => {
          this.listall = res;

          console.log(res);
        });
    });
  }
}
