import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: Login;
  public token;
  public status;
  public identity;
  constructor(
    private _usuariosService: UsuariosService,
    private _router: Router
    ) { 
    this.login = new Login('','');
  }

  ngOnInit() {
  }

  onSubmit(form){
    this._usuariosService.signUp(this.login).subscribe( response => {
      //Token
    if ( response.status != 'error'){
      this.status = 'success';
      this.token = response;
      // OBJETO USUARIO AUTENTICADO
        this._usuariosService.signUp(this.login, true).subscribe( response => {
            this.identity = response;
            //console.log(this.token);
            //console.log(this.identity);

            //PERSISTIR DATOS USUARIO AUTENTICADO
            localStorage.setItem('token', this.token);
            localStorage.setItem('identity', JSON.stringify(this.identity));

            //redireccion al inicio
            this._router.navigate(['negocio']);
        },
        error => {
          this.status = 'error';
          console.log(<any>error);
        })
    } else {
      this.status = 'error';
    }
  },
  error => {
    this.status = 'error';
    console.log(<any>error);
  }) 
  }

}
