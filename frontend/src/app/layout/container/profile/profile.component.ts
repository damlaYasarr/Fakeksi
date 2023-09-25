import { Component, OnInit } from '@angular/core';
import { faSmile, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';
import { LayoutComponent } from '../../layout.component';
import { AuthenticationService } from 'src/app/services/authenticationservice';
import { Userservice } from 'src/app/services/userservices';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'profile',
  //sayfayı komple kullan diyoruz
  templateUrl: 'profile.component.html',
})
export class ProfileComponent implements OnInit {
  profile: any;
  usr_id: number;
  secilenDosya: File | undefined;
  constructor(
    private userservice: Userservice,
    private authservice: AuthenticationService,
    private router: Router,
    private http: HttpClient,
    private logoutLayout: LayoutComponent,
  ) {
    //tanımlama yaparken kullanılır
  }

  faSmile = faSmile;
  facirclearrow = faCircleArrowUp;
  dosyaSec(event: Event) {
    const dosyaSecmeOlayi = event as Event & { target: { files: FileList } };
    this.secilenDosya = dosyaSecmeOlayi.target.files[0];
    console.log(this.secilenDosya);
  }

  resimYukle() {
    if (this.secilenDosya) {
      const formData = new FormData();
      formData.append('id', String(localStorage.getItem('user_id')));
      formData.append('image', this.secilenDosya);

      this.http
        .post('https://localhost:7095/api/Fileupload/imageupload', formData)
        .subscribe((res) => {
          console.log('Dosya yüklendi.', res);
        });
    } else {
      console.log('Lütfen bir dosya seçin.');
    }
  }

  ngOnInit(): void {
    const info = localStorage.getItem('user_id'); //just the usual way
    console.log(info);
    this.getprofile(info);
  }
  async getprofile(info: any) {
    this.usr_id = Number(info);

    this.userservice.userProfileInfo(this.usr_id).subscribe((res) => {
      this.profile = res;
      console.log(res);
    });
  }
  onClick() {
    this.authservice.logout();
    localStorage.removeItem('user_id');
    localStorage.removeItem('loggedin');
    this.logoutLayout.classReferance.authendricated = false;
    console.log('çıkış yapıldı');
    this.router.navigateByUrl('(bla:home/daily)');
  }
}
