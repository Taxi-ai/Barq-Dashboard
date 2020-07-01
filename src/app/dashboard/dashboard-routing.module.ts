import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../admin-login/auth.guard';
import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { UserNewComponent } from '../users/user/user-new/user-new.component';
import { UserPageComponent } from '../users/user/user-page/user-page.component';
import { EditUserComponent } from '../users/user/edit-user/edit-user.component';
import { CompaniesComponent } from '../companies/companies.component';
import { CompanyNewComponent } from '../companies/company/company-new/company-new.component';
import { CompanyPageComponent } from '../companies/company/company-page/company-page.component';
import { CompanyEditComponent } from '../companies/company/company-edit/company-edit.component';
import { CarsComponent } from '../cars/cars.component';
import { CarNewComponent } from '../cars/car/car-new/car-new.component';
import { CarPageComponent } from '../cars/car/car-page/car-page.component';
import { CarEditComponent } from '../cars/car/car-edit/car-edit.component';
import { IssuesComponent } from '../issues/issues.component';
import { IssueNewComponent } from '../issues/issue/issue-new/issue-new.component';
import { IssuePageComponent } from '../issues/issue/issue-page/issue-page.component';
import { IssueEditComponent } from '../issues/issue/issue-edit/issue-edit.component';
import { MobileNavigationMenuComponent } from '../side-menu/mobile-navigation-menu/mobile-navigation-menu.component';
import { OffersComponent } from '../offers/offers.component';
import { OfferNewComponent } from '../offers/offer/offer-new/offer-new.component';
import { OfferEditComponent } from '../offers/offer/offer-edit/offer-edit.component';
import { OfferPageComponent } from '../offers/offer/offer-page/offer-page.component';
import { PackagesComponent } from '../packages/packages.component';
import { PackageNewComponent } from '../packages/package/package-new/package-new.component';
import { PackagePageComponent } from '../packages/package/package-page/package-page.component';
import { PackageEditComponent } from '../packages/package/package-edit/package-edit.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { NotificationNewComponent } from '../notifications/notification/notification-new/notification-new.component';
import { NotificationPageComponent } from '../notifications/notification/notification-page/notification-page.component';
import { NotificationEditComponent } from '../notifications/notification/notification-edit/notification-edit.component';
import { FaqsComponent } from '../faqs/faqs.component';
import { QuestionNewComponent } from '../faqs/question/question-new/question-new.component';
import { QuestionPageComponent } from '../faqs/question/question-page/question-page.component';
import { QuestionEditComponent } from '../faqs/question/question-edit/question-edit.component';


const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/new', component: UserNewComponent },
      { path: 'users/:id', component: UserPageComponent },
      { path: 'users/:id/edit', component: EditUserComponent },
      { path: 'partners', component: CompaniesComponent },
      { path: 'partners/new', component: CompanyNewComponent },
      { path: 'partners/:id', component: CompanyPageComponent },
      { path: 'partners/:id/edit', component: CompanyEditComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'cars/new', component: CarNewComponent },
      { path: 'cars/:id', component: CarPageComponent },
      { path: 'cars/:id/edit', component: CarEditComponent },
      { path: 'issues', component: IssuesComponent },
      { path: 'issues/new', component: IssueNewComponent },
      { path: 'issues/new/:ownerID', component: IssueNewComponent },
      { path: 'issues/:id', component: IssuePageComponent },
      { path: 'issues/:id/edit', component: IssueEditComponent },
      { path: 'offers', component: OffersComponent },
      { path: 'offers/new', component: OfferNewComponent },
      { path: 'offers/:id', component: OfferPageComponent },
      { path: 'offers/:id/edit', component: OfferEditComponent },
      { path: 'packages', component: PackagesComponent },
      { path: 'packages/new', component: PackageNewComponent },
      { path: 'packages/:id', component: PackagePageComponent },
      { path: 'packages/:id/edit', component: PackageEditComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'notifications/new', component: NotificationNewComponent },
      { path: 'notifications/:id', component: NotificationPageComponent },
      { path: 'notifications/:id/edit', component: NotificationEditComponent },
      { path: 'faqs', component: FaqsComponent },
      { path: 'faqs/new', component: QuestionNewComponent },
      { path: 'faqs/:id', component: QuestionPageComponent },
      { path: 'faqs/:id/edit', component: QuestionEditComponent },
      { path: 'navigate', component: MobileNavigationMenuComponent },
      { path: '**', redirectTo: 'page-not-found' }
    ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
