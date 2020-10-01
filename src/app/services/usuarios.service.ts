import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url: string;
  private identity;
  private token;

  constructor(private _http: HttpClient) {
    this.url = global.url;
  }

  registe(usuarios):Observable<any>{
    var url = "http://192.168.88.109/api_domicilios/public/usuario";
    let json = JSON.stringify(usuarios);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(url, params, {headers: headers});
  }

  signUp(usuario, gettoken = null ): Observable<any>{
    if(gettoken != null){
        usuario.gettoken = 'true';
    }
    let json = JSON.stringify(usuario);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'usuario/login', params, {headers: headers});
}

getIdentity(){
  let identity = JSON.parse(localStorage.getItem('identity'));
  if(identity && identity != 'undefined'){
      this.identity = identity;
  }else {
      this.identity = null;
  }
  return this.identity;
}

getToken(){
  let token = localStorage.getItem('token');
  if ( token != 'undefined'){
      this.token = token;
  } else {
      this.token = null;
  }
  return this.token;
}

}
