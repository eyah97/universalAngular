import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { application } from 'express';

const routes: Routes = [
  {
    path: 'universal', loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule)
  },
  {
    path: '', loadChildren: () => import('./public/public.module').then(m=>m.PublicModule)
  },
  {
    path: '***', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
