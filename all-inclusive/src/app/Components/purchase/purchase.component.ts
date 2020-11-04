import { Component, OnInit } from '@angular/core';
import { FavoritService } from 'src/app/favorit.service';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  
  constructor(
    private favoritService : FavoritService
  ) { }
  favorites=this.favoritService.favorites;
  ngOnInit(): void {
  }

}
