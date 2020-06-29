import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserPageComponent } from './users/user/user-page/user-page.component';
import { EditUserComponent } from './users/user/edit-user/edit-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyPageComponent } from './companies/company/company-page/company-page.component';
import { CompanyEditComponent } from './companies/company/company-edit/company-edit.component';
import { LoginComponent } from './admin-login/admin-login.component';
import { AuthGuard } from './admin-login/auth.guard';
import { CarsComponent } from './cars/cars.component';
import { CarPageComponent } from './cars/car/car-page/car-page.component';
import { CarEditComponent } from './cars/car/car-edit/car-edit.component';
import { MobileNavigationMenuComponent } from './side-menu/mobile-navigation-menu/mobile-navigation-menu.component';
import { CompanyNewComponent } from './companies/company/company-new/company-new.component';
import { IssuesComponent } from './issues/issues.component';
import { IssuePageComponent } from './issues/issue/issue-page/issue-page.component';
import { IssueNewComponent } from './issues/issue/issue-new/issue-new.component';
import { IssueEditComponent } from './issues/issue/issue-edit/issue-edit.component';
import { UserNewComponent } from './users/user/user-new/user-new.component';
import { CarNewComponent } from './cars/car/car-new/car-new.component';


// TODO remake routing after making the front end site using dashboard and main sites
const routes: Routes = [
  { path: '', component: UnderConstructionComponent, pathMatch: 'full' },
  { path: 'barq-admin', component: LoginComponent },
  { path: 'page-not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
