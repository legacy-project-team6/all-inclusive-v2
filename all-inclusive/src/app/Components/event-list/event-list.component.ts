import { Component, OnInit } from '@angular/core';
import { FavoritService } from 'src/app/favorit.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  
  events=this.favoritService.events;
  listCondition=this.favoritService.listCondition;
  constructor(
    private favoritService: FavoritService
  ) { }

  ngOnInit(): void {
  }
  addLike(eventId){
    this.events[eventId].like=this.events[eventId].like+1;
  }

  addDisLike(eventId){
    this.events[eventId].disLike=this.events[eventId].disLike+1;
  }

  participate(event){
    this.favoritService.favorites.push(event)
  }

}

