import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global'

@Injectable({
  providedIn: 'root'
})
export class SubCategoriaService {

  private url: string;
  constructor(private _http: HttpClient) {
    this.url = global.url;
   }

  private autorizadoGet(ruta: string){
    var url = this.url+ruta;
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': localStorage.getItem('token')
    });
      return this._http.get(url, {headers: headers});  
  }

  getSubCategoria(id):Observable<any>{
    return this.autorizadoGet("getSubCategoria/"+id);
  }
}
