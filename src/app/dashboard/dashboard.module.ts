import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { ProfilePictureComponent } from '../navbar/profile-picture/profile-picture.component';
import { UsersComponent } from '../users/users.component';
import { UsersTableComponent } from '../users/users-table/users-table.component';
import { UsersGraphComponent } from '../users/users-graph/users-graph.component';
import { UserPageComponent } from '../users/user/user-page/user-page.component';
import { EditUserComponent } from '../users/user/edit-user/edit-user.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { ChatPanelComponent } from '../chat-panel/chat-panel.component';
import { MapComponent } from '../shared/map/map.component';
import { DashboardComponent } from './dashboard.component';
import { ShortenPipe } from '../pipes/shorten.pipe';
import { FetchingErrorComponent } from '../fetching/fetching-error/fetching-error.component';
import { IsFetchingComponent } from '../fetching/is-fetching/is-fetching.component';
import { FetchedNothingComponent } from '../fetching/fetched-nothing/fetched-nothing.component';
import { CompaniesComponent } from '../companies/companies.component';
import { CompaniesTableComponent } from '../companies/companies-table/companies-table.component';
import { CompanyPageComponent } from '../companies/company/company-page/company-page.component';
import { CompanyEditComponent } from '../companies/company/company-edit/company-edit.component';
import { CarsComponent } from '../cars/cars.component';
import { CarsTableComponent } from '../cars/cars-table/cars-table.component';
import { CarPageComponent } from '../cars/car/car-page/car-page.component';
import { CarEditComponent } from '../cars/car/car-edit/car-edit.component';
import { CarsGraphComponent } from '../cars/cars-graph/cars-graph.component';
import { PackagesComponent } from '../packages/packages.component';
import { PackagesTableComponent } from '../packages/packages-table/packages-table.component';
import { PackagesGraphComponent } from '../packages/packages-graph/packages-graph.component';
import { PackagePageComponent } from '../packages/package/package-page/package-page.component';
import { NotificationsTableComponent } from '../notifications/notifications-table/notifications-table.component';
import { NotificationsGraphComponent } from '../notifications/notifications-graph/notifications-graph.component';
import { NotificationPageComponent } from '../notifications/notification/notification-page/notification-page.component';
import { NotificationEditComponent } from '../notifications/notification/notification-edit/notification-edit.component';
import { PackageEditComponent } from '../packages/package/package-edit/package-edit.component';
import { TodoComponent } from '../todo/todo.component';
import { AdminMenuComponent } from '../navbar/admin-menu/admin-menu.component';
import { TodoContainerComponent } from '../navbar/todo-container/todo-container.component';
import { ClickingLayerComponent } from '../shared/clicking-layer/clicking-layer.component';
import { MobileNavigationMenuComponent } from '../side-menu/mobile-navigation-menu/mobile-navigation-menu.component';
import { CompanyNewComponent } from '../companies/company/company-new/company-new.component';
import { BackButtonComponent } from '../shared/back-button/back-button.component';
import { IssuesComponent } from '../issues/issues.component';
import { IssuePageComponent } from '../issues/issue/issue-page/issue-page.component';
import { IssueEditComponent } from '../issues/issue/issue-edit/issue-edit.component';
import { IssuesGraphComponent } from '../issues/issues-graph/issues-graph.component';
import { IssuesTableComponent } from '../issues/issues-table/issues-table.component';
import { UserNewComponent } from '../users/user/user-new/user-new.component';
import { CarNewComponent } from '../cars/car/car-new/car-new.component';
import { IssueNewComponent } from '../issues/issue/issue-new/issue-new.component';
import { InformationCardsComponent } from '../shared/information-cards/information-cards.component';
import { SearchAndFilterComponent } from '../shared/search-and-filter/search-and-filter.component';
import { GraphComponent } from '../shared/graph/graph.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { NotificationsComponent } from '../notifications/notifications.component';







@NgModule({
  declarations: [
    NavbarComponent,
    ProfilePictureComponent,
    UsersComponent,
    UsersTableComponent,
    UsersGraphComponent,
    UserPageComponent,
    EditUserComponent,
    SideMenuComponent,
    NotificationsComponent,
    ChatPanelComponent,
    MapComponent,
    DashboardComponent,
    ShortenPipe,
    FetchingErrorComponent,
    IsFetchingComponent,
    FetchedNothingComponent,
    CompaniesComponent,
    CompaniesTableComponent,
    CompanyPageComponent,
    CompanyEditComponent,
    CarsComponent,
    CarsTableComponent,
    HomeComponent,
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
    InformationCardsComponent,
    SearchAndFilterComponent,
    GraphComponent
  ],


  imports: [
    SharedModule,
    ChartsModule,
    FontAwesomeModule,
    DashboardRoutingModule

  ],





})
export class DashboardModule { }
