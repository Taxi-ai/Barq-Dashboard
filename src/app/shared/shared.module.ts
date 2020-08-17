import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardSpinnerComponent } from './dashboard-spinner/dashboard-spinner.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    DashboardSpinnerComponent,

  ],
  exports: [
    DashboardSpinnerComponent,
    FormsModule,
    RouterModule,
    CommonModule

  ],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
