import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherUserComponent } from './otheruser.component';

const routes: Routes = [
  {
    path: 'user/:id',
    component: OtherUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherUserModule {}
