import { Component, OnInit } from '@angular/core';
import {FavoritService} from '../../favorit.service'

@Component({
  selector: 'app-serched-event',
  templateUrl: './serched-event.component.html',
  styleUrls: ['./serched-event.component.css']
})
export class SerchedEventComponent implements OnInit {
  events: any ;

  constructor(private favoritservice: FavoritService) { 
    
  }

  ngOnInit(): void {
    setInterval(()=>{this.events=this.favoritservice.getSearchedItems()}, 100)
  }
  
}
