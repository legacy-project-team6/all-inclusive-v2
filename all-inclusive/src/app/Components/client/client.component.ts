import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  // user comming as a props from signin and to be sent as a props to messages component
  // @Input() user: any ;
  user: {firstName: 'Elyes', lastname: 'Ferjani', email: 'e@hotmail.com', phoneNumber: 123456789}
  eventsArray: any = []
  constructor() { }

  ngOnInit(): void {
  }

}
