import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPComponent } from './forgot.component';




const routes: Routes = [
  {
    path: 'forgotpassword',
    outlet:'log',
    component: ForgotPComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgorpasswordModule { }