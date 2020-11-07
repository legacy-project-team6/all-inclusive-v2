import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DatePipe} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
import { SideNavCompComponent } from './Components/side-nav-comp/side-nav-comp.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { ScrollToTopComponent } from './Components/scroll-to-top/scroll-to-top.component';
import { HttpClientModule } from '@angular/common/http';
import {NavbarComponent} from './Components/navbar/navbar.component';
import { SerchedEventComponent } from './components/serched-event/serched-event.component';
import { FormsModule } from '@angular/forms';
import { PurchaseComponent } from './Components/purchase/purchase.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SideNavCompComponent,
    SideNavComponent,
    ScrollToTopComponent,
    SerchedEventComponent
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DatePipe, NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
