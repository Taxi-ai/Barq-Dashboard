import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardSpinnerComponent } from './dashboard-spinner/dashboard-spinner.component';


@NgModule({
  declarations: [
    DashboardSpinnerComponent,

  ],
  exports: [
    DashboardSpinnerComponent,

  ],
  imports: [

    CommonModule
  ]
})
export class SharedModule { }
