import { Component, OnInit } from '@angular/core';
import { FavoritService } from 'src/app/favorit.service';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  
  events;
  sports=[];
  culture=[];
  trips=[];
  listCondition=this.favoritService.listCondition;
  constructor(private favoritService: FavoritService,private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllEvents().subscribe((events: any[])=>{
      this.events=events;
      for(let i=0;i<events.length;i++) {
        if(events[i].type=='sport'){
          this.sports.push(events[i]);
        }
        if(events[i].type=='trip'){
          this.trips.push(events[i]);
        }
        if(events[i].type=='culture'){
          this.culture.push(events[i]);
        }
      }
    })
  }

  sportEvents(){
    this.events.filter((event: any)=>{console.log(event)})
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

