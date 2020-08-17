import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnderConstructionComponent } from './under-construction.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';


const routes: Routes = [


  { path: '', component: LandingPageComponent, pathMatch: 'full' },


];

@NgModule({
  declarations: [
    UnderConstructionComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],

  exports: [RouterModule]


})
export class HomeModule { }
