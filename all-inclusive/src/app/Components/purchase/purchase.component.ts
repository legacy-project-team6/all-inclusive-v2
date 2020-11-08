import { Component, OnInit } from '@angular/core';
import { FavoritService } from 'src/app/favorit.service';
import {DataService} from 'src/app/data.service';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor(
    private favoritService: FavoritService,
    private dataService: DataService,
  ) { }
  // variables
  favorites = this.favoritService.favorites;
  value = "";
  total="";
  registration = "reserve";
  specificEvent;

  ngOnInit(): void {
  }
 
  // update the input of number of reservation 
  modelChangeFn(e) {
    this.value = e;
  }
  modelChange(e) {
    this.total = e;
  }

  // calculate total price of reservation
  caculTotal( seats, eventId) {

    for (let i = 0; i < this.favorites.length; i++) {
      if (i === eventId) {
        this.specificEvent = eventId;
      }
    }

    if (Number(this.value) > seats || (seats - Number(this.value)) < 0) {
      return window.alert('Sorry the remaining seats are less than your number of reservation')
    }
    if(this.value === ""){
      return window.alert('Please choose how many reservation do u need')
    }

    this.registration = "confirm";
  }

// confirm the reservation and update the database

  confirm(favorite) {
    favorite.seats=favorite.seats-Number(this.value)
    this.dataService.updateEventById(favorite,favorite._id).subscribe(res=>{
      for(let i = 0; i < this.favorites.length; i++){
        if(this.favorites[i]._id===favorite._id){
          this.favorites[i]=res;
        }
      }
    })
    this.value = ""
    window.alert('Your reservation has been confirmed')
    this.registration = "reserve";
  
  }

  // cancel the choosing event from favorites
  reject(eventId) {
    for (let i = 0; i < this.favorites.length; i++) {
      if (i === eventId) {
        this.favorites.splice(i, 1)
      }
    }
  }

}
