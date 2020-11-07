import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritService {

  favorites=[];

  listCondition='user'
//method for changing view
  changeList(view){
    this.listCondition=view;
  }

  constructor() { }


}

