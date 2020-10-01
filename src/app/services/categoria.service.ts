import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';



@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
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
      return this._http.get(url, {headers: headers}).pipe( data => {
        return data;
      });
  }
  
  updateRelNegCat(id: number): Observable<any>{
    return this.autorizadoGet('updateCategorias/'+id);
  }
  allCategorias(): Observable<any>{
    var url = this.url+"allCategorias";
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(url, {headers: headers});
  }

  getCategorias(): Observable<any>{
    return this.autorizadoGet("getCategorias");
  }
}
