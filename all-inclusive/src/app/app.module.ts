import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SlideShowComponent } from './Components/slide-show/slide-show.component';
import { EventListComponent } from './Components/event-list/event-list.component';
import { ClientComponent } from './Components/client/client.component';
import { CompanyComponent } from './Components/company/company.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { PurchaseComponent } from './Components/purchase/purchase.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    SlideShowComponent,
    EventListComponent,
    ClientComponent,
    CompanyComponent,
    MessagesComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
