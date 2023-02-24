import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LoginModule } from './container/login/login-routing.module';
import { LoginComponent } from './container/login/login.component';
import { MsgModule } from './container/msgging/msg-routing.module';
import { ProfileModule } from './container/profile/profile-routing.module';



const dashBoardRoutes : Route[] = [
    {
        path: 'home', pathMatch:'full',
      children:[
    
            {
                path: 'profile',
             
                loadChildren: () => import('./container/profile/profile-routing.module').then(m => m.ProfileModule)
              },
              {
                path: 'login',
                
               loadChildren: () => import('./container/login/login-routing.module').then(m => m.LoginModule)
              },
              {
                path: 'msg',
               
                loadChildren: () => import('./container/msgging/msg-routing.module').then(m => m.MsgModule)
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
    ProfileModule,
  ]
})
export class LayoutModule { }