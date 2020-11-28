import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiComponent } from './api/api.component';
import { ApplicationRoutingModule } from './application-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ ApiComponent],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    HttpClientModule,

  ]
})
export class ApplicationModule { }
