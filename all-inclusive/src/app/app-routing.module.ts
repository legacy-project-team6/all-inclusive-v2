import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './Components/client/client.component'
import { CompanyComponent } from './Components/company/company.component'
import { MessagesComponent } from './Components/messages/messages.component'

const routes: Routes = [
  { path: 'client', component: ClientComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'client', component: MessagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
