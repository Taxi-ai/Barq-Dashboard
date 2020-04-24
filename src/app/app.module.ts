import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DarkLightToggleComponent } from './navbar/dark-light-toggle/dark-light-toggle.component';
import { ProfilePictureComponent } from './navbar/profile-picture/profile-picture.component';
import { NotificationsComponent } from './navbar/notifications/notifications.component';
import { UsersComponent } from './users/users.component';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { UsersGraphComponent } from './users/users-graph/users-graph.component';
import { UserPageComponent } from './users/user-page/user-page.component';

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
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
