import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchItems ;
  user;
  searchWords: string = "";
  constructor(private dataService: DataService, private userService: UserService) { 
    
    
  }

  ngOnInit(): void {
    var stop = setInterval(()=> {
      this.user = this.userService.getCurrentUser();
    if(this.user !== undefined) {
      clearInterval(stop);
    }
    },100);
  }
  
  onSearch(e){
    this.searchWords= e.target.value;
    this.dataService.searchByWord({searchWords:this.searchWords}).subscribe( (data) => {
      this.searchItems = data;
    });
    
  }

}
