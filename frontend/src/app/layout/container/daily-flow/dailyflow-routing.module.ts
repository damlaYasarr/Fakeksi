import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyFLow } from './daily-flow.component';

const routes: Routes = [
  {
    path: 'daily',

    component: DailyFLow,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyModule {}
