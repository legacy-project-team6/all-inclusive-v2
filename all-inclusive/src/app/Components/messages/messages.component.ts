import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
   status: boolean = false;
  constructor() { }
  toggleUp(){
    this.status = !this.status
  }
  ngOnInit(): void {
  }

}