import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { faUser, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { LoginComponent } from './container/login/login.component';
import { AuthenticationService } from '../services/authenticationservice';

@Component({
  selector: 'product',
  //sayfayı komple kullan diyoruz
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  static authendricated: boolean;
  public classReferance = LayoutComponent;
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
    LayoutComponent.authendricated;
  }

  faUser = faUser;
  faMessage = faMessage;

  selectedList: any;
  menulist = ['eksi', 'msg', 'profile'];

  ngOnInit(): void {
    console.log(this.changebuttons());
  }
  changebuttons() {
    if (localStorage.getItem('user_id') != null) {
      LayoutComponent.authendricated = true;
    } else {
      LayoutComponent.authendricated = false;
    }
    return LayoutComponent.authendricated;
  }

  openFLowList(menulist: any) {
    this.selectedList = menulist;
  }
}
