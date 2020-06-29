import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './admin-login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', component: LoginComponent },

];

@NgModule({
  declarations: [
    LoginComponent,

  ],
  imports: [

    SharedModule,
    RouterModule.forChild(routes)

  ],

  exports: [RouterModule]

})
export class AdminLoginModule { }
