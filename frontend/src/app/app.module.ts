import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from 'src/layout/layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { ProfileComponent } from './container/profile/profile.component';
import { DailyFLow } from './container/daily-flow/daily-flow.component';

//bütün component modulleri bburaya import eidlir
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProfileComponent,
    DailyFLow
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
