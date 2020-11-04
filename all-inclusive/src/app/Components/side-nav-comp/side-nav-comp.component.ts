import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav-comp',
  templateUrl: './side-nav-comp.component.html',
  styleUrls: ['./side-nav-comp.component.css']
})
export class SideNavCompComponent implements OnInit {
  @Input() company: any;
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
    this.eventName = item.target.value
  }
  handleChange2(item){
    this.eventType = item.target.value
  }
  handleChange3(item){
    this.eventPlace = item.target.value
  }
  handleChange4(item){
    this.eventPlace = item.target.value
  }
  handleChange5(item){
    this.eventDate = item.target.value
  }
  handleChange6(item){
    this.eventDescription = item.target.value
  }
  handleChange7(item){
    this.eventImage = item.target.value
  }
  // server Data request
  addEvent(e){
    e.preventDefault()
  }

}
