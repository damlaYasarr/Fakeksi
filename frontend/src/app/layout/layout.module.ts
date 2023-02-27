import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { DailyFLow } from './container/daily-flow/daily-flow.component';
import { DailyModule } from './container/daily-flow/dailyflow-routing.module';
import { LoginModule } from './container/login/login-routing.module';
import { LoginComponent } from './container/login/login.component';
import { MsgModule } from './container/msgging/msg-routing.module';
import { ProfileModule } from './container/profile/profile-routing.module';
import { TagAllModule } from './container/tagallentries/tagallentries-routing.module';



const dashBoardRoutes : Route[] = [
    {
        path: 'home', pathMatch:'full',
      children:[
    
            {
                path: 'profile',
             
                loadChildren: () => import('./container/profile/profile-routing.module').then(m => m.ProfileModule)
              },
              {
                path: 'daily',
             
                loadChildren: () => import('./container/daily-flow/dailyflow-routing.module').then(m => m.DailyModule)
              },
              {
                path: 'login',
                
               loadChildren: () => import('./container/login/login-routing.module').then(m => m.LoginModule)
              },
              {
                path: 'msg',
               
                loadChildren: () => import('./container/msgging/msg-routing.module').then(m => m.MsgModule)
              },
              {
                path: 'entrydetail',
               
                loadChildren: () => import('./container/tagallentries/tagallentries-routing.module').then(m => m.TagAllModule)
              },
             
            ]},
        
]
 
@NgModule({
  imports: [
    CommonModule,
  
    RouterModule.forChild(dashBoardRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule,
    LoginModule,
    MsgModule,
    DailyModule,
    TagAllModule,
    ProfileModule,
  ]
})
export class LayoutModule { }