import { Component, OnInit } from '@angular/core';
import {
  faArrowDown,
  faArrowUp,
  faDroplet,
  faListDots,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { EntryServices } from 'src/app/services/entryservices';
import { SharedService } from 'src/app/services/simpleservice';
import { LayoutComponent } from '../../layout.component';

@Component({
  selector: 'dataflow',
  //sayfayı komple kullan diyoruz
  templateUrl: 'daily-flow.component.html',
})
export class DailyFLow implements OnInit {
  faDrop = faDroplet;
  faMessageArrowUp = faMessage;
  faListDot = faListDots;
  entries: any;
  tagid: number = 1;
  entryid: number = 0;
  IsCliked: boolean = false;
  likecount: number;
  visible:boolean=false;
  faArrowdown=faArrowDown;
  faArrowUp=faArrowUp;
  constructor(
    private entryService: EntryServices,
    private sharedid: SharedService,
    private layoutComponent:LayoutComponent
  ) {}

  async ngOnInit() {
    try {
       this.entryService.getDailyOneTagAndOneEntry().subscribe((res) => {
        console.log(res);
        this.entries = res;
      });
      this.entryService.getLikeCount(this.entryid).subscribe((res) => {
        this.likecount = Number(res);
      });
      
    } catch (error) {
      console.error(error);
    }
    if( this.layoutComponent.classReferance.authendricated==true){
      this.visible=false;
    }else{
      this.visible=true;
    }
    
  }
  logTagName(tagname: string) {
    console.log('Clicked tagname:', tagname);
    this.sharedid.tagname = tagname;
    this.entryService.getTagIdByName(tagname).subscribe((res) => {
      this.tagid = Number(res);
      this.sharedid.changeId(this.tagid);
      
      console.log(this.tagid);
    });
  }

  logEntryName(name: string) {
    console.log('Clicked tagname:', name);
    this.entryService.getEntyIdByName(name).subscribe((res) => {
      console.log(res);
      this.entryid = Number(res);
    });
  }
  addlike() {
    this.entryService
      .addLike(Number(localStorage.getItem('user_id')), this.entryid)
      .subscribe((res) => {
        console.log('Response:', res);
        this.IsCliked = true;
      });
  }
  deletelike() {
    this.entryService
      .deletelike(Number(localStorage.getItem('user_id')), this.entryid)
      .subscribe((res) => {
        console.log('Response:', res);
        this.IsCliked = false;
      });
  }
}
