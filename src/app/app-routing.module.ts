import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { LoginComponent } from './admin-login/admin-login.component';



// TODO remake routing after making the front end site using dashboard and main sites
const routes: Routes = [
  { path: '', loadChildren: () => import('./under-construction/home.module').then(m => m.HomeModule), pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'barq-admin', loadChildren: () => import('./admin-login/admin-login.module').then(m => m.AdminLoginModule) },
  { path: 'page-not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


