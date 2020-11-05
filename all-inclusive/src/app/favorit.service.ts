import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritService {
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

      imgUrl:"https://cdn-az.allevents.in/events1/banners/4bb937881e2188b08717c5f5c5621ae9641ecc4677721ad4a9473d81a95d1634-rimg-w960-h502-gmir.jpg?v=1584682243",

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


  favorites=[];

  listCondition='home'
//method for changing view
  changeList(view){
    this.listCondition=view;
  }

  addLike(eventId){
    this.events[eventId].like=this.events[eventId].like+1;
  }

  addDisLike(eventId){
    this.events[eventId].disLike=this.events[eventId].disLike+1;
  }

  participate(event){
    this.favorites.push(event)
  }
  constructor() { }


}

