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
    this.favoritService.addLike(eventId);
  }

  addDisLike(eventId){
    this.favoritService.addDisLike(eventId);
  }

  participate(event){
    this.favoritService.participate(event);
  }
}
