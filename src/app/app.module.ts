import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DarkLightToggleComponent } from './navbar/dark-light-toggle/dark-light-toggle.component';
import { ProfilePictureComponent } from './navbar/profile-picture/profile-picture.component';
import { NotificationsComponent } from './navbar/notifications/notifications.component';
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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DarkLightToggleComponent,
    ProfilePictureComponent,
    NotificationsComponent,
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
    DashboardSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
