import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsgDetailComponent } from './msgDetail.component';

const routes: Routes = [
  {
    //Sendername parametresi ekle
    path: 'msgdetails/:sendername',
    component: MsgDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class MsgDetailModule {}
