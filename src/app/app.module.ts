import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AdminLoginModule } from './admin-login/admin-login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './under-construction/home.module';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './admin-login/auth-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AdminLoginModule,
    HomeModule,
    DashboardModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
