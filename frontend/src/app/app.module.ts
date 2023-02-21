import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from 'src/layout/layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { ProfileComponent } from 'src/layout/container/profile/profile.component';
import { DailyFLow } from 'src/layout/container/daily-flow/daily-flow.component';
import { HeaderFlowComponent } from 'src/layout/container/user_entry/headerflow.component';
import { MsggingComponent } from 'src/layout/container/msgging/msgging.component';
import { CommentComponent } from 'src/layout/container/commentContainer/commentContainer.component';
import { HttpClientModule } from '@angular/common/http';
import {  LoginComponent } from 'src/layout/container/login/login.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms' 
import { AdminComponent } from 'src/layout/admin/admin.component';
//import { Injectable } from '@angular/core';
//moduller buraya eklenir
const appRoute: Routes=[
  {path: 'login', component:  LoginComponent},
 {path: '', component: DailyFLow},
 {path: 'profile', component: ProfileComponent},
 {path: 'msg', component: MsggingComponent},
 {path: 'admin', component:  AdminComponent},
]
//bütün component modulleri bburaya import eidlir
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProfileComponent,
    DailyFLow,
    HeaderFlowComponent,
    MsggingComponent,
    CommentComponent,
   LoginComponent,
   AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule, 

    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)

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
