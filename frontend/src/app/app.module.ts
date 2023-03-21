import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms' 
import { LoginComponent } from './layout/container/login/login.component';
import { DailyFLow } from './layout/container/daily-flow/daily-flow.component';
import { ProfileComponent } from './layout/container/profile/profile.component';
import { MsggingComponent } from './layout/container/msgging/msgging.component';
import { AdminComponent } from './layout/admin/admin.component';
import { LayoutComponent } from './layout/layout.component';

import { CommentComponent } from './layout/container/commentContainer/commentContainer.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderFlowComponent } from './layout/container/today_tags/headerflow.component';
import { TagAllEntriesComponent } from './layout/container/tagallentries/tagallentries.component';
import { SearchBoxComponent } from './layout/container/searchbox/searchbox.component';
import { OtherUserComponent } from './layout/container/otheruser/otheruser.component';
import { MsgDetailComponent } from './layout/container/msgDetail/msgDetail.component';





//bütün component modulleri bburaya import eidlir
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SearchBoxComponent,
    DailyFLow,
    
    HeaderFlowComponent,
    TagAllEntriesComponent,
    CommentComponent,
   LoginComponent,  MsggingComponent,   ProfileComponent,OtherUserComponent,
   AdminComponent,MsgDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
//injectble kısmında sayfa gidiyor
/**@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}*/
//https://localhost:7095/api/TagEntry/GetTagandcount
//localhost: /api/getalltagandentrieswithUSER -userin taglere entryleri -anasayfa
export class AppModule {


 }
