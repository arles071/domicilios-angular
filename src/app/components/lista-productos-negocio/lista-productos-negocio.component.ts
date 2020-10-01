import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import {global} from '../../services/global';
declare var $:any;

@Component({
  selector: 'app-lista-productos-negocio',
  templateUrl: './lista-productos-negocio.component.html',
  styleUrls: ['./lista-productos-negocio.component.css']
})
export class ListaProductosNegocioComponent implements OnInit {
  public productosNegocio = [];
  public url:string;
  public activo = 0;
  public imagen = "";
  public idProducto: number;

  public afuConfig = {
    multiple: true, //no voy a subir multiples archivos
    formatsAllowed: ".jpg,.png, .gif, .jpeg", // formato a subir
    maxSize: "50", //tamaño maximo
    uploadAPI:  {
      url: global.url+"producto/upload", //url a subir la imagen
      method:"POST",
    },
    theme: "attachPin", //dragNDrop
    hideProgressBar: true, //bara de proceso
    hideResetBtn: false,
    hideSelectBtn: true,
    attachPinText: 'Subir imagen'
};
  constructor(private _productoService: ProductosService) { }

  ngOnInit() {
    this.url = global.url;
    let negocio = {
      nit: '1111111-1'
    };
    this._productoService.getProductoNit(negocio).subscribe(data => {
      console.log(data.productos);
      this.productosNegocio = data.productos;
    })
    
    console.log($('.imagenes > .col').length);
    $('.fila').click(function(e){
      //alert('hola');
      
      if($(this).children('ul').hasClass('activado')){
       $(this).children('ul').removeClass('activado');
       $(this).children('.imagenes').hide();
     }else {
       $('.imagenes').hide();
       $('.fila ul').removeClass('activado');
       $(this).children('ul').addClass('activado');
       $(this).children('.imagenes').show();
     }
    });
  }
  avatarUpload(datos){
    let data = JSON.parse(datos.response);
    this.imagen = data.imagen;
    //console.log(datos.response);
    let imagenes = {
      mul_nombre : this.imagen,
      mpro_prod_id: this.idProducto
    }
    this._productoService.guardarImagenBd(imagenes).subscribe(response => {
      console.log(this.productosNegocio.length);
      for(var produ in this.productosNegocio){
        //console.log(produ);
        //console.log(this.productosNegocio[produ]);
        console.log(this.imagen);
        this.productosNegocio[produ].imagenes.push({"nombre": this.imagen,
        "id": response.imagen.id});
        console.log(this.productosNegocio[produ].imagenes);
      }
      console.log(response);
    })
    //console.log(this.imagen);
  }
  subirImagen(idProducto){
    this.idProducto = idProducto;
    //alert(idProducto);
    var colores = [{"nombre": "fredy",
                    "id": "123"},
                  {"nombre": "arley",
                  "id": "124"}
                    ]
   
    colores.push ({"nombre": "diana",
    "id": "1234"}); 
    alert(colores[2].nombre);
  }

}
