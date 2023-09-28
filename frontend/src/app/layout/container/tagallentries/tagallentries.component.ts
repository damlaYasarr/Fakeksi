import { Component, OnInit } from '@angular/core';
import { EntryServices } from 'src/app/services/entryservices';
import {
  faDroplet,
  faMessage,
  faListDots,
  faArrowDown,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/app/services/simpleservice';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Location } from '@angular/common';
import { LayoutComponent } from '../../layout.component';
import { Userservice } from 'src/app/services/userservices';
@Component({
  selector: 'tagallentries',
  //sayfayı komple kullan diyoruz
  templateUrl: 'tagallentries.component.html',
})
//css düzenlenecek
export class TagAllEntriesComponent implements OnInit {
  entryid: number = 0;
  IsCliked: boolean = false;
  likecount: number;
  tagid: number;
  definition: string;
  user_localid: number;
  visible: boolean = false;
  constructor(
    private router: Router,
    public sharedservice: SharedService,
    private enryservice: EntryServices,
    private location: Location,
    private layoutComponent: LayoutComponent,
    private userservice: Userservice,
  ) {}
  dailyflow: any;

  faDrop = faDroplet;
  faMessageArrowUp = faMessage;
  faListDot = faListDots;
  faArrowdown = faArrowDown;
  faArrowUp = faArrowUp;
  username: string;
  usrid: number;
  searchForms = new FormGroup({
    searchInputs: new FormControl(''),
  });

  async ngOnInit() {
    this.sharedservice.currentId.subscribe((id) => {
      this.tagid = Number(id);
      this.getEntryies(this.tagid);
    });
    this.enryservice.getLikeCount(this.entryid).subscribe((res) => {
      this.likecount = Number(res);
    });
    //this.addentries(localStorage.getItem('user_id'),this.tagid  )
    if (this.layoutComponent.classReferance.authendricated == true) {
      this.visible = false;
    } else {
      this.visible = true;
    }
  }

  async getEntryies(id: number) {
    this.enryservice.getTagsAllEntriesByTagId(id).subscribe((res) => {
      this.dailyflow = res;
      this.router.navigateByUrl(`/(bla:home/entries/:${id})`);
    });
  }
  refreshPage() {
    this.location.go(this.location.path());
    location.reload();
  }
  addentryndtag() {
    this.definition = String(this.searchForms.value.searchInputs);
    this.enryservice
      .addTagandentry(
        Number(localStorage.getItem('user_id')),
        this.sharedservice.tagname,
        this.definition,
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
  entryadd() {
    console.log(this.tagid);
    if (this.tagid == 0) {
      this.addentryndtag();
    } else {
      this.definition = String(this.searchForms.value.searchInputs);

      console.log(this.sharedservice.tagname);
      this.user_localid = Number(localStorage.getItem('user_id'));
      console.log(this.user_localid, this.definition, this.tagid);
      this.enryservice
        .addEntry(this.user_localid, this.tagid, this.definition)
        .subscribe((res) => {
          this.getEntryies(this.tagid);
          console.log('Başarılı işlem: ', res);
        });
    }
    this.searchForms.get('searchInputs')?.setValue('');
  }
  addlike() {
    this.enryservice
      .addLike(Number(localStorage.getItem('user_id')), this.entryid)
      .subscribe((res) => {
        console.log('Response:', res);
        this.IsCliked = true;
      });
  }
  deletelike() {
    this.enryservice
      .deletelike(Number(localStorage.getItem('user_id')), this.entryid)
      .subscribe((res) => {
        console.log('Response:', res);
        this.IsCliked = false;
      });
  }

  logEntryName(name: string) {
    console.log('Clicked tagname:', name);
    this.enryservice.getEntyIdByName(name).subscribe((res) => {
      console.log(res);
      this.entryid = Number(res);
    });
  }
  getusername(name: string) {
    console.log('user name', name);
    this.username = name;
  }
  gotoUserPage() {
    this.userservice.getuserIdByName(this.username).subscribe((res) => {
      console.log(res);
      this.usrid = Number(res);
      this.userservice.changeId(this.usrid);
      if (this.usrid == Number(localStorage.getItem('user_id'))) {
        this.router.navigateByUrl(`/(bla:home/profile)`);
      }
      this.router.navigateByUrl(`/(bla:home/user/:${this.usrid})`);
    });
  }
}
