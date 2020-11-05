import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
   status: boolean = false;
  constructor(private dataService: DataService) { }
  toggleUp(){
    this.status = !this.status
  }
  ngOnInit(): void {
    // getting all events on init
    this.dataService.getAllMessages().subscribe((messages: any[] )=> {
      console.log(messages)
    })
  }

}