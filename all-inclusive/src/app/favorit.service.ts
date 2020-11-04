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
      imgUrl:"https://lh3.googleusercontent.com/proxy/66y27zPyq2Umc2eVkOaATBWNGR21x5qHB6OXesZ8MdtwVqmPk4nlR7PWWJI7L_I6Lwo0Hpm-KEV_5BUamSvBiDZ6fA6Yd9Zjaoto5IKYy262yYIigQ-i-cI_0AqV2G2nm7o3m7qZS_kQ",
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
