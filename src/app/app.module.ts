import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// para poder usar el api-rest
import { HttpClientModule } from '@angular/common/http';

// SUBIR IMAGENES
import { AngularFileUploaderModule } from "angular-file-uploader";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { RegistroSuscripcionComponent } from './components/registro-suscripcion/registro-suscripcion.component';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NegocioComponent } from './components/negocio/negocio.component';
import { ErrorComponent } from './components/error/error.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ListaProductosNegocioComponent } from './components/lista-productos-negocio/lista-productos-negocio.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegistroComponent,
    RegistroUsuarioComponent,
    RegistroSuscripcionComponent,
    NuevoProductoComponent,
    InicioComponent,
    FooterComponent,
    LoadingComponent,
    NegocioComponent,
    ErrorComponent,
    PrincipalComponent,
    ProductosComponent,
    ListaProductosNegocioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
