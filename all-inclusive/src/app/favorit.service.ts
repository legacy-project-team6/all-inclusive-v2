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
      description:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgUrl:"https://cdn.siasat.com/wp-content/uploads/2019/05/events.png",
      like:0,
      disLike:0,
      price:2145,
      seats:963
    },
    {
      name:"hiking event",
      type:"hiking",
      place:"Nabeul",
      date:"25/12/2020",
      description:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgUrl:"https://www.day2trust.com/wp-content/uploads/2016/06/events.jpg",
      like:0,
      disLike:0,
      price:9632,
      seats:522
    },
    {
      name:"hiking event",
      type:"hiking",
      place:"Nabeul",
      date:"25/12/2020",
      description:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

      imgUrl:"https://cdn-az.allevents.in/events1/banners/4bb937881e2188b08717c5f5c5621ae9641ecc4677721ad4a9473d81a95d1634-rimg-w960-h502-gmir.jpg?v=1584682243",

      like:0,
      disLike:0,
      price:5678,
      seats:87
    },{
      name:"hiking event",
      type:"hiking",
      place:"Nabeul",
      date:"25/12/2020",
      description:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgUrl:"https://cdn-az.allevents.in/events1/banners/4bb937881e2188b08717c5f5c5621ae9641ecc4677721ad4a9473d81a95d1634-rimg-w960-h502-gmir.jpg?v=1584682243",
      like:0,
      disLike:0,
      price:1234,
      seats:0
    }
  ];


  favorites=[];

  listCondition='user'
//method for changing view
  changeList(view){
    this.listCondition=view;
  }

  constructor() { }


}

