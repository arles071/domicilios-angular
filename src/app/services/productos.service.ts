import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //headers = new HttpHeaders();
  private url: string;
  constructor(private _http: HttpClient) {
    this.url = global.url;
    console.log(localStorage.getItem('token'));
    //this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //this.headers.append('Authorization', 'Bearer '+localStorage.getItem('token'));
   }

  registrarProducto(producto):Observable<any>{
    var url = this.url + "producto";
    let json = JSON.stringify(producto);
    let params = 'json='+json;
    //console.log(params);
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': localStorage.getItem('token')
    });
    return this._http.post(url, params, {headers: headers});
  }
  subirImagen(file): Observable<any>{
    var url = this.url+"producto/upload";
    var json = JSON.stringify(file);
    console.log(json);
    let params = 'file0='+json;
    console.log(file);
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': localStorage.getItem('token')
    });
    //return null;
   return this._http.post(url, 'file0='+file, {headers: headers});
  }
  guardarImagenBd(imagenes): Observable<any>{
    var url = this.url+"multimedia/producto";
    var json = JSON.stringify(imagenes);
    let params = 'json='+json;
    
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': localStorage.getItem('token')
    });
    
    //return null;
   return this._http.post(url, params, {headers: headers});
  }

  getImagenProducto(id): Observable<any>{
    var url = this.url+"multimedia/producto/"+id;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(url, {headers: headers});
  }

  deleteImagenProducto(id): Observable<any>{
    var url = this.url+"multimedia/producto/"+id;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.delete(url, {headers: headers});
  }
  getProductoNit(nitNegocio): Observable<any>{
    var url = this.url+"getProductos";
    var json = JSON.stringify(nitNegocio);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(url, params, {headers: headers});
  }
}
