import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchItems ;
  searchWords: string;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSearch(e){
    this.searchWords= e.target.value;
    console.log(this.searchWords);
    this.dataService.searchByWord(this.searchWords).subscribe( (data) => {
      this.searchItems = data;
      console.log(data);
    });
  }
}
