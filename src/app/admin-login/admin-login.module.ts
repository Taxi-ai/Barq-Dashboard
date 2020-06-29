import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './admin-login.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    SharedModule

  ],
  exports: [
    LoginComponent,

  ]
})
export class AdminLoginModule { }
