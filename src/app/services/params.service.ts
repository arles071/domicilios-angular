import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParamsService {

  mensaje: string;
  private enviarMensajeSubject = new Subject<string>();

  //muestra el mensaje a traves de la funcion enviarMensajeObservable.suscribe(data => {})
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();

  enviarMensaje(mensaje: string){
    this.mensaje = mensaje;
    this.enviarMensajeSubject.next(mensaje);//almacenamos el mensaje
  }

  // para mostrar el servicio
  /*this._paramsService.enviarMensajeObservable.subscribe( mensaje => {
      this.url = mensaje;
    })*/

  //para crear el mensaje
  /*this._paramsService.enviarMensaje('hola soy el mensaje')*/
 
   

  constructor() { }
}
