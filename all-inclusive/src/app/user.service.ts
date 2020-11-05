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

  // log in client 

  public logInClient(options){
    return this.httpClient.post(this._urlClient + '/login', options)
  }

  // log in company 

  public logInCompany(options){
    return this.httpClient.post(this._urlCompany + '/login', options)
  }

  // delete client / company

  public deleteAllClient(options){
    return this.httpClient.delete(this._urlClient, options)
  }

  public deleteAllCompany(options){
    return this.httpClient.delete(this._urlCompany, options)
  }

  // delete client by id/ company by id

  public deleteClientById(options){
    return this.httpClient.delete(this._urlClient + '/:id', options)
  }

  public deleteCompanyById(options){
    return this.httpClient.delete(this._urlCompany + '/:id', options)
  }

}
