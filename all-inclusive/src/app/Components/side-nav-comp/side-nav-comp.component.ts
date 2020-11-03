import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-comp',
  templateUrl: './side-nav-comp.component.html',
  styleUrls: ['./side-nav-comp.component.css']
})
export class SideNavCompComponent implements OnInit {
  eventName: string;
  eventType: string;
  eventPlace: string;
  // check on data type
  eventDate: Date;
  eventDescription: string;
  // check on image type
  eventImage: string;

  constructor() { }

  ngOnInit(): void {
  }
  handleChange1(item){
    this.eventName = item
  }
  handleChange2(item){
    this.eventType = item
  }
  handleChange3(item){
    this.eventPlace = item
  }
  handleChange4(item){
    this.eventPlace = item
  }
  handleChange5(item){
    this.eventDate = item
  }
  handleChange6(item){
    this.eventDescription = item
  }
  handleChange7(item){
    this.eventImage = item
  }
  // server Data request
  addEvent(e){
    e.preventDefault()
  }

}
