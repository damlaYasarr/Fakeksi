import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsgDetailModule } from '../msgDetail/msgDetail-routing.module';
import { MsggingComponent } from './msgging.component';

const routes: Routes = [
  {
    path: 'msg',

    component: MsggingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class MsgModule {}
