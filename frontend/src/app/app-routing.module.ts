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

import { LayoutModule } from './layout/layout.module';
import { Notfound } from './layout/notfound/notfound.component';

//import { Injectable } from '@angular/core';
//moduller buraya eklenir
const appRoute: Routes=[
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',outlet:'bla',component:LayoutComponent,loadChildren:()=>import("./layout/layout.module").then(module => module.LayoutModule)},
 {path: 'admin', outlet:'vla', component:  AdminComponent, pathMatch: 'full'}, 
//otherwise redirect to home
 {path:'notfound', outlet:'notfound', component:Notfound}


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
