import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import { date, number } from 'joi';

@Component({
  selector: 'app-side-nav-comp',
  templateUrl: './side-nav-comp.component.html',
  styleUrls: ['./side-nav-comp.component.css']
})
export class SideNavCompComponent implements OnInit {
  @Input() company: any;
  eventForm;
  eventName: string;
  eventType: string;
  eventPlace: string;
  // check on data type
  eventDate: Date;
  eventDescription: string;
  // check on image type
  eventImage: string;

  constructor(private router: Router, private formBuilder: FormBuilder, private dataService: DataService) {
    this.eventForm = this.formBuilder.group({
      name: "",
      type: "",
      place: "",
      imgUrl: "",
      date: date,
      description: "",
      seats: number,
      price: number
    })
  }

  ngOnInit(): void {
  }
  // handleChange1(item){
  //   this.eventName = item.target.value
  // }
  // handleChange2(item){
  //   this.eventType = item.target.value
  // }
  // handleChange3(item){
  //   this.eventPlace = item.target.value
  // }
  // handleChange4(item){
  //   this.eventPlace = item.target.value
  // }
  // handleChange5(item){
  //   this.eventDate = item.target.value
  // }
  // handleChange6(item){
  //   this.eventDescription = item.target.value
  // }
  // handleChange7(item){
  //   this.eventImage = item.target.value
  // }
  // server Data request
  addEvent(e){
    e.preventDefault()
    this.dataService.getAllEvents().subscribe(data => {
      // console.log(data)
    })
  }
  onSubmit(event) {
    const newEvent = {
      name: event.name,
      type: event.type,
      place: event.place,
      date: event.date,
      description: event.description,
      imgUrl: event.imgUrl,
      like: 0,
      disLike: 0,
      seats: event.seats,
      price:event.price
    }
    //add the new event to the database of the respective company.
    console.log(newEvent);
    this.router.navigate(['home'])
  }

}