import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoremComponent } from './lorem/lorem.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [LoremComponent, ApiComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ApplicationModule { }
