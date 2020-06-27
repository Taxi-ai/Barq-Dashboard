import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilePictureComponent } from './navbar/profile-picture/profile-picture.component';
import { UsersComponent } from './users/users.component';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { UsersGraphComponent } from './users/users-graph/users-graph.component';
import { UserPageComponent } from './users/user/user-page/user-page.component';
import { EditUserComponent } from './users/user/edit-user/edit-user.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { ChatPanelComponent } from './chat-panel/chat-panel.component';
import { MapComponent } from './map/map.component';
import { DashboardSpinnerComponent } from './dashboard-spinner/dashboard-spinner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FetchingErrorComponent } from './fetching/fetching-error/fetching-error.component';
import { IsFetchingComponent } from './fetching/is-fetching/is-fetching.component';
import { FetchedNothingComponent } from './fetching/fetched-nothing/fetched-nothing.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompaniesTableComponent } from './companies/companies-table/companies-table.component';
import { CompanyPageComponent } from './companies/company/company-page/company-page.component';
import { CompanyEditComponent } from './companies/company/company-edit/company-edit.component';
import { FeedbackPageComponent } from './feedbacks/feedback-page/feedback-page.component';
import { LoginComponent } from './admin-login/admin-login.component';
import { AuthInterceptorService } from './admin-login/auth-interceptor.service';
import { CarsComponent } from './cars/cars.component';
import { CarsTableComponent } from './cars/cars-table/cars-table.component';
import { CarPageComponent } from './cars/car/car-page/car-page.component';
import { CarEditComponent } from './cars/car/car-edit/car-edit.component';
import { CarsGraphComponent } from './cars/cars-graph/cars-graph.component';
import { PackagesComponent } from './packages/packages.component';
import { PackagesTableComponent } from './packages/packages-table/packages-table.component';
import { PackagesGraphComponent } from './packages/packages-graph/packages-graph.component';
import { PackagePageComponent } from './packages/package/package-page/package-page.component';
import { NotificationsTableComponent } from './notifications/notifications-table/notifications-table.component';
import { NotificationsGraphComponent } from './notifications/notifications-graph/notifications-graph.component';
import { NotificationPageComponent } from './notifications/notification/notification-page/notification-page.component';
import { NotificationEditComponent } from './notifications/notification/notification-edit/notification-edit.component';
import { PackageEditComponent } from './packages/package/package-edit/package-edit.component';
import { TodoComponent } from './todo/todo.component';
import { AdminMenuComponent } from './navbar/admin-menu/admin-menu.component';
import { TodoContainerComponent } from './navbar/todo-container/todo-container.component';
import { ClickingLayerComponent } from './clicking-layer/clicking-layer.component';
import { MobileNavigationMenuComponent } from './mobile-navigation-menu/mobile-navigation-menu.component';
import { CompanyNewComponent } from './companies/company/company-new/company-new.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { IssuesComponent } from './issues/issues.component';
import { IssuePageComponent } from './issues/issue/issue-page/issue-page.component';
import { IssueEditComponent } from './issues/issue/issue-edit/issue-edit.component';
import { IssuesGraphComponent } from './issues/issues-graph/issues-graph.component';
import { IssuesTableComponent } from './issues/issues-table/issues-table.component';
import { UserNewComponent } from './users/user/user-new/user-new.component';
import { CarNewComponent } from './cars/car/car-new/car-new.component';
import { IssueNewComponent } from './issues/issue/issue-new/issue-new.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfilePictureComponent,
    UsersComponent,
    UsersTableComponent,
    UsersGraphComponent,
    UserPageComponent,
    EditUserComponent,
    SideMenuComponent,
    HomeComponent,
    NotFoundComponent,
    FeedbacksComponent,
    ChatPanelComponent,
    MapComponent,
    DashboardSpinnerComponent,
    DashboardComponent,
    UnderConstructionComponent,
    ShortenPipe,
    FetchingErrorComponent,
    IsFetchingComponent,
    FetchedNothingComponent,
    CompaniesComponent,
    CompaniesTableComponent,
    CompanyPageComponent,
    CompanyEditComponent,
    FeedbackPageComponent,
    LoginComponent,
    CarsComponent,
    CarsTableComponent,
    CarPageComponent,
    CarEditComponent,
    CarsGraphComponent,
    PackagesComponent,
    PackagesTableComponent,
    PackagesGraphComponent,
    PackagePageComponent,
    NotificationsTableComponent,
    NotificationsGraphComponent,
    NotificationPageComponent,
    NotificationEditComponent,
    PackageEditComponent,
    TodoComponent,
    AdminMenuComponent,
    TodoContainerComponent,
    ClickingLayerComponent,
    MobileNavigationMenuComponent,
    CompanyNewComponent,
    BackButtonComponent,
    IssuesComponent,
    IssuePageComponent,
    IssueEditComponent,
    IssuesGraphComponent,
    IssuesTableComponent,
    UserNewComponent,
    CarNewComponent,
    IssueNewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
