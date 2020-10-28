import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtletasService {
  _url = 'http://localhost:8080/myteam-api/atletas'
  constructor(
    private http: HttpClient
  ) {
    console.log("Servicio atletas")
   }

   getAtletas() {
     let headers = new HttpHeaders().set('Type-content', 'application/json')

     return this.http.get(this._url, {headers: headers})
   }
}
