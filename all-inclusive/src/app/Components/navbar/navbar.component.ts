import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {FavoritService} from '../../favorit.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchWords: string = "";
  constructor(private dataService: DataService, private favoritservice: FavoritService) { }

  ngOnInit(): void {
  }

  onSearch(e){
    this.searchWords= e.target.value;
    this.dataService.searchByWord({searchWords:this.searchWords}).subscribe( (data) => {
      this.favoritservice.setSearchedItems(data);
    });
    
  }

  
}
