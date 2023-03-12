import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagAllEntriesComponent } from './tagallentries.component';






const routes: Routes = [
  {
    path: 'entrydetail/:id',
    component: TagAllEntriesComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagAllModule { }