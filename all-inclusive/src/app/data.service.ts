import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _urlMessages = "http://localhost:3000/api/message";
  private _urlevents = "http://localhost:3000/api/event";

  constructor(private httpClient: HttpClient) { }

    // get all messages / events


  public getAllMessages(){
    return this.httpClient.get(this._urlMessages)
  }

  public getAllEvents(){
    return this.httpClient.get(this._urlevents)
  }

  // add a new message / event

  public addNewMessage(options){
    return this.httpClient.post(this._urlMessages + '/add', options)
  }

  public addNewEvent(options){
    return this.httpClient.post(this._urlevents + '/add', options)
  }
}
