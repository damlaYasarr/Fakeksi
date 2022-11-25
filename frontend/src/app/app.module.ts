import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs'
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from 'src/layout/layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { ProfileComponent } from 'src/layout/container/profile/profile.component';
import { DailyFLow } from 'src/layout/container/daily-flow/daily-flow.component';
import { HeaderFlowComponent } from 'src/layout/container/app-search/headerflow.component';
import { MsggingComponent } from 'src/layout/container/msgging/msgging.component';
import { CommentComponent } from 'src/layout/container/commentContainer/commentContainer.component';

const appRoute: Routes=[
  {path: '', component: DailyFLow},
 {path: '', component: DailyFLow},
 {path: 'profile', component: ProfileComponent},
 {path: 'msg', component: MsggingComponent}
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
    CommentComponent

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoute)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
