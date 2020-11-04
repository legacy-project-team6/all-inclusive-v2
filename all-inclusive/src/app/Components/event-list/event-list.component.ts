import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events=[
    {
      name:"hiking event",
      type:"hiking",
      place:"Nabeul",
      date:"25/12/2020",
      description:"welcome to our hiking",
      imgUrl:"https://cdn.siasat.com/wp-content/uploads/2019/05/events.png",
      like:0,
      disLike:0
    },
    {
      name:"hiking event",
      type:"hiking",
      place:"Nabeul",
      date:"25/12/2020",
      description:"welcome to our hiking",
      imgUrl:"https://www.day2trust.com/wp-content/uploads/2016/06/events.jpg",
      like:0,
      disLike:0
    },
    {
      name:"hiking event",
      type:"hiking",
      place:"Nabeul",
      date:"25/12/2020",
      description:"welcome to our hiking",
      imgUrl:"https://lh3.googleusercontent.com/proxy/WxypDW-QxOQ_Cv2-_2fT-tIcvo7Dh9rpc-gZkhhoFD5PF63Zu5YOFcVFbIACm0uPA2_cnAVehFQNN8GR-HvnX9Iv-nE7yzziQyQzXX0OwweXRcaLf7qBFjAQcQlO152Z-zOm-VY9qgjx",
      like:0,
      disLike:0
    },{
      name:"hiking event",
      type:"hiking",
      place:"Nabeul",
      date:"25/12/2020",
      description:"welcome to our hiking",
      imgUrl:"https://cdn-az.allevents.in/events1/banners/4bb937881e2188b08717c5f5c5621ae9641ecc4677721ad4a9473d81a95d1634-rimg-w960-h502-gmir.jpg?v=1584682243",
      like:0,
      disLike:0
    }
  ];

  participation = [];
  constructor() { }

  ngOnInit(): void {
  }
  addLike(eventId){
    this.events[eventId].like=this.events[eventId].like+1;
  }

  addDisLike(eventId){
    this.events[eventId].disLike=this.events[eventId].disLike+1;
  }

  participate(event){
    this.participation.push(event)
  }
}
