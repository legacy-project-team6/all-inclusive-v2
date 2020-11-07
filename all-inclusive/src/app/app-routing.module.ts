import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { HomeComponent } from './Components/home/home.component';
import { SerchedEventComponent } from './components/serched-event/serched-event.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'slideshow', component: SlideShowComponent },
  {path: 'footer', component: FooterComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'login', component: LoginComponent },
  {path: 'navbar', component: NavbarComponent },
  {path: 'eventlist', component: EventListComponent },
  {path: 'client', component: ClientComponent },
  {path: 'company', component: CompanyComponent },
  {path: 'message', component: MessagesComponent },
  {path: 'purchase', component: PurchaseComponent },
  {path: 'home', component: HomeComponent },
  {path: 'searched', component: SerchedEventComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  SlideShowComponent,
  FooterComponent,
  SignupComponent,
  LoginComponent,
  NavbarComponent,
  EventListComponent,
  ClientComponent,
  CompanyComponent,
  MessagesComponent,
  PurchaseComponent,
  HomeComponent,
  SerchedEventComponent
  ]
