import { Component, OnInit } from '@angular/core';
import { FavoritService } from 'src/app/favorit.service';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor(
    private favoritService: FavoritService
  ) { }
  favorites = this.favoritService.favorites;
  value = "";
  total: Number;
  registration = "reserve";
  specificEvent;
  ngOnInit(): void {
  }

  update(value) { this.value = value; }

  caculTotal(price, seats, eventId) {
    this.specificEvent = eventId;

    if (Number(this.value) > seats || (seats - Number(this.value)) <= 0 ||this.value==="") {
      return window.alert('The remaining seats are less than your number of reservation')
    }
    this.total = Number(this.value) * price;
    this.registration = "confirm"
  }
  confirm(favorite) {
    window.alert('Your reservation has been confirmed')
    console.log(favorite)
    // 
    // it should also decrement the event places(tickets) number in the database
  }


  reject(favoriteId) {
    for (let i = 0; i < this.favorites.length; i++) {
      if (i === favoriteId) {
        this.favorites.splice(i, 1)
      }
    }
  }

}
