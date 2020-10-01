import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  public usuario: Usuarios;
  public status: string;
  constructor( private _usuarioService: UsuariosService) {
    this.usuario = new Usuarios('','','','','');
   }

  ngOnInit() {
    //this._usuarioService.registe();
  }

  registrarUsuaio(form){
    console.log(form);
  }

}
