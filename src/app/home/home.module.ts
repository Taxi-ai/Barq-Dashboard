import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { UnderConstructionComponent } from '../under-construction/under-construction.component';


@NgModule({
  declarations: [
    HomeComponent,
    UnderConstructionComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    UnderConstructionComponent,
  ]
})
export class HomeModule { }
