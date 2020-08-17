import { Meta, BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthInterceptorService } from './admin-login/auth-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';







@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,




  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,


  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }, Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
