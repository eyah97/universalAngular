import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoremComponent } from './lorem/lorem.component';
import { ApiComponent } from './api/api.component';

const routes: Routes = [
  {
    path: '', 
    component: LoremComponent
  },
  {
    path: 'Api', 
    component: ApiComponent
  },
  {
    path: '***', redirectTo: ''
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
