import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {FavoritService} from '../../favorit.service';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchWords: string = "";
  user;
  constructor(private dataService: DataService, private favoritservice: FavoritService, private userservice: UserService) { }

  ngOnInit(): void {
    this.user= this.userservice.getCurrentUser()||{};
  }

  onSearch(e){
    this.searchWords= e.target.value;
    this.dataService.searchByWord({searchWords:this.searchWords}).subscribe( (data) => {
      this.favoritservice.setSearchedItems(data);
    });
    
  }

  
}
