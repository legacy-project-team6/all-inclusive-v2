import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  // user comming as a props from signin and to be sent as a props to messages component
  user: any = {}
  eventsArray: any = []
  constructor() { }

  ngOnInit(): void {
  }

}
