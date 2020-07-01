import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './admin-login/auth-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffersComponent } from './offers/offers.component';
import { OfferNewComponent } from './offers/offer/offer-new/offer-new.component';
import { OfferPageComponent } from './offers/offer/offer-page/offer-page.component';
import { OfferEditComponent } from './offers/offer/offer-edit/offer-edit.component';
import { OffersTableComponent } from './offers/offers-table/offers-table.component';
import { PackageNewComponent } from './packages/package/package-new/package-new.component';
import { NotificationNewComponent } from './notifications/notification/notification-new/notification-new.component';
import { FaqComponent } from './faq/faq.component';
import { QuestionNewComponent } from './faqs/question/question-new/question-new.component';
import { FaqsComponent } from './faqs/faqs.component';
import { QuestionEditComponent } from './faqs/question/question-edit/question-edit.component';
import { QuestionPageComponent } from './faqs/question/question-page/question-page.component';
import { FaqsTableComponent } from './faqs/faqs-table/faqs-table.component';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    OffersComponent,
    OfferNewComponent,
    OfferPageComponent,
    OfferEditComponent,
    OffersTableComponent,
    PackageNewComponent,
    NotificationNewComponent,
    FaqComponent,
    QuestionNewComponent,
    FaqsComponent,
    QuestionEditComponent,
    QuestionPageComponent,
    FaqsTableComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,


  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
