import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Todayflow } from './todayflow.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {
    path: 'today',
    component: Todayflow,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)
   
  ],
 
  exports: [RouterModule],
})
export class todayflowModule {}
