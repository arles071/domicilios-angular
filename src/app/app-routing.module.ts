import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { RegistroSuscripcionComponent } from './components/registro-suscripcion/registro-suscripcion.component';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NegocioComponent } from './components/negocio/negocio.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductosComponent } from './components/productos/productos.component';


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "productos", component: ProductosComponent},
  {path: "inicio", component: InicioComponent},
  {path: "registro", component: RegistroComponent},
  {path: "registroUsuario", component: RegistroUsuarioComponent},
  {path: "registroSuscripcion", component: RegistroSuscripcionComponent},
  {path: "registrarProducto", component: NuevoProductoComponent},
  {path: "negocio", component: NegocioComponent},
  { path: "error/:sure", component: ErrorComponent },
  {path: "**", pathMatch: "full", redirectTo: "inicio"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
