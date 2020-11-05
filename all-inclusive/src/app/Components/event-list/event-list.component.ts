import { Component, OnInit } from '@angular/core';
import { FavoritService } from 'src/app/favorit.service';
// import { FavoritService } from 'src/app/favorit.service';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  
  events=this.favoritService.events;
  listCondition=this.favoritService.listCondition;
  constructor(private favoritService: FavoritService,private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllEvents().subscribe((events: any[])=>{
      console.log(events);
    })
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

