import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnderConstructionComponent } from './under-construction.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [


  { path: '', component: UnderConstructionComponent, pathMatch: 'full' },


];

@NgModule({
  declarations: [
    UnderConstructionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],

  exports: [RouterModule]


})
export class HomeModule { }
