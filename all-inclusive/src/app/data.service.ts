import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _urlMessages = "http://localhost:3000/api/message";
  private _urlevents = "http://localhost:3000/api/event";
  private _urlUserEvent = "http://localhost:3000/api/userevent";

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

  // get message by id 

  public getMessageById(options){
    return this.httpClient.post(this._urlMessages + '/:id', options)
  }

  // delete message / message by id 

  public deleteAllMessages(options){
    return this.httpClient.delete(this._urlMessages, options)
  }

  public deleteMessageById(options){
    return this.httpClient.delete(this._urlMessages + '/:id', options)
  }

  // update message by id

  public updateMessageById(options){
    return this.httpClient.put(this._urlMessages + '/:id', options)
  }

  // get event by id 

  public getEventById(id){
    return this.httpClient.get(this._urlevents + '/'+id)
  }

  // delete all events / event by id 

  public deleteAllEvents(options){
    return this.httpClient.delete(this._urlMessages, options)
  }

  public deleteEventById(options){
    return this.httpClient.delete(this._urlMessages + '/:id', options)
  }

  // update event by id

  public updateEventById(options,id){
    return this.httpClient.put(this._urlevents + '/'+id, options)
  }

  // add many Events 

  public addManyEvents(options){
    return this.httpClient.post(this._urlMessages + '/addmany', options)
  }

  // USER EVENTS

    // get user events

  public getUserEvent(){
    return this.httpClient.get(this._urlUserEvent + '/:id')
  }

  // get user events by id

  public getUserEventById(options){
    return this.httpClient.post(this._urlUserEvent + '/:id', options)
  }

  // delete all events / event by id 

  public deleteAllUserEvents(options){
    return this.httpClient.delete(this._urlUserEvent, options)
  }

  public deleteUserEventById(options){
    return this.httpClient.delete(this._urlUserEvent + '/:id', options)
  }

  // update event by id

  public updateUserEventById(options){
    return this.httpClient.put(this._urlUserEvent + '/:id', options)
  }

  // add many Events 

  public addUserEvent(options){
    return this.httpClient.post(this._urlUserEvent + '/addmany', options)
  }


}
