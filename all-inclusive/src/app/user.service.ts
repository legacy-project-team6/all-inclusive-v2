import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _urlClient = "http://localhost:3000/api/user";
  private _urlCompany = "http://localhost:3000/api/company";

  constructor(private httpClient: HttpClient) { }

  // get users informations from database
  public getAllClients(){
    return this.httpClient.get(this._urlClient)
  }

  public getAllCompanies(){
    return this.httpClient.get(this._urlCompany)
  }

  // add a new users depeding on the type

  public addNewClient(options){
    return this.httpClient.post(this._urlClient + '/add', options)
  }

  public addNewCompany(options){
    return this.httpClient.post(this._urlCompany + '/add', options)
  }
}
