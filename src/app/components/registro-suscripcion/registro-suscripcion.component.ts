import { Component, OnInit } from '@angular/core';
import { SuscripcionesService } from 'src/app/services/suscripciones.service';
import { Suscripciones } from 'src/app/models/suscripciones';


@Component({
  selector: 'app-registro-suscripcion',
  templateUrl: './registro-suscripcion.component.html',
  styleUrls: ['./registro-suscripcion.component.css']
})
export class RegistroSuscripcionComponent implements OnInit {

  public suscripciones: Suscripciones;
  public status: string;
  loading: boolean;
  public ciudades: any[];
  private id_suscripcion;
  
  constructor(private _suscripcionService: SuscripcionesService) {
    this.suscripciones = new Suscripciones('', '', '', '', '', '','', '', '', '');
    this.loading = true;
   }

  ngOnInit() {
    this.getCiudades();
  }

  getCiudades(){
    this._suscripcionService.getCiudades().subscribe( data => {
      this.ciudades = data;
      this.loading = false;
    });
  }
  
  registroSuscripcion(form){
    
    this._suscripcionService.registro(this.suscripciones).subscribe( response => {
      console.log(response);
      if(response.status == 'pendiente'){
        this.status = response.status;
        //alert(response.status + "  id suscripcion: " + response.id_suscripcion );
        this.id_suscripcion = {
          'id_suscripcion': response.id_suscripcion
        }
        form.reset();
      } else {
        this.status = "error";
      }
      
    },
    error =>{
      console.log(<any>error);
    });
  }
  pago(){
    this._suscripcionService.getTransacion(this.id_suscripcion).subscribe( response => {
      console.log(response['pago']);
      this.status = response['pago'];
    })
  }
  cancelar(){

  }

}


