import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritService {

  favorites=[];
  searchedItems: any;

  listCondition='user'
//method for changing view
  changeList(view){
    this.listCondition=view;
  }

  constructor() { }
  getSearchedItems(){
    return this.searchedItems
  }

    setSearchedItems(filtredItems){
      this.searchedItems=filtredItems
    }
}

