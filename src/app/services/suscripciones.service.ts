import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionesService {

  private url: string;

  constructor(private _http: HttpClient) {
    this.url = global.url;
   }

  registro(suscripciones):Observable<any>{
    //console.log(suscripciones['negocio']);
    //console.log(suscripciones['usuario']);
    var url = this.url + "suscripcion";
    let json = JSON.stringify(suscripciones);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(url, params, {headers: headers});
  }

  getCiudades(){
    var url = this.url + "ciudades";
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(url, {headers: headers})
    .pipe( map ( data => {
      return data['ciudades'];
    }));  
  }

  getTransacion(transacion){
    var url = this.url + "transacion";
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    let json = JSON.stringify(transacion);
    let params = 'json='+json;
    console.log(params);
    return this._http.post(url, params, {headers: headers})
  }
}
