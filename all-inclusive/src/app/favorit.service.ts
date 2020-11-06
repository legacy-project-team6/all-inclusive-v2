import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritService {

  favorites=[];

  listCondition='home'
//method for changing view
  changeList(view){
    this.listCondition=view;
  }

  constructor() { }


}

