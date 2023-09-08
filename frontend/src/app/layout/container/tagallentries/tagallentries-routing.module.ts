import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagAllEntriesComponent } from './tagallentries.component';

const routes: Routes = [
  {
    path: 'entries/:id',
    component: TagAllEntriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagAllModule {}
