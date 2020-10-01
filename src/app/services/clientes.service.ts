import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    public _http: HttpClient
  ) { }

  register(cliente): Observable<any>{
    var url = global.url + "clientes";
    let json = JSON.stringify(cliente);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(url, params, {headers: headers});
  }
}
