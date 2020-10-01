import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/models/clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  public cliente: Clientes;
  public status: string;
  constructor(private _clienteService: ClientesService) {
    this.cliente = new Clientes('','','','','','');
   }

  ngOnInit() {
  }
  onSubmit(form){
    //console.log(this.cliente);

    this._clienteService.register(this.cliente).subscribe( response => {
      console.log(response);
      if(response.status == 'success'){
        this.status = response.status;
        form.reset();
      } else {
        this.status = "error";
      }
      
    },
    error =>{
      console.log(<any>error);
    });

  }

}
