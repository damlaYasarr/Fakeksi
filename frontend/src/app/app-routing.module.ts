import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './layout/container/login/login.component';
import { MsggingComponent } from './layout/container/msgging/msgging.component';
import { ProfileComponent } from './layout/container/profile/profile.component';
import { AdminComponent } from './layout/admin/admin.component';
import { config } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { DailyFLow } from './layout/container/daily-flow/daily-flow.component';
import { ProfileModule } from './layout/container/profile/profile-routing.module';
import { LoginModule } from './layout/container/login/login-routing.module';
import { MsgModule } from './layout/container/msgging/msg-routing.module';
import { LayoutModule } from './layout/layout.module';

//import { Injectable } from '@angular/core';
//moduller buraya eklenir
const appRoute: Routes=[
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',loadChildren:()=>import("./layout/layout.module").then(module => module.LayoutModule)},
 {path: 'admin', component:  AdminComponent, pathMatch: 'full'}, 
//otherwise redirect to home
 


]

@NgModule({
  declarations: [],
  imports: [
   
    LayoutModule,
    CommonModule,

    HttpClientModule,
    RouterModule.forRoot(appRoute,  { scrollPositionRestoration: 'enabled' })
  ]
})
export class AppRoutingModule { }
