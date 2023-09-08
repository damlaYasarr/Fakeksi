import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/_helpers';
import { ForgorpasswordModule } from '../forgotpassword/forgot.module';
import { LoginComponent } from './login.component';
import { RegisterModule } from '../register/regsiter.module';

const routes: Routes = [
  {
    path: 'login',

    component: LoginComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginModule {}
