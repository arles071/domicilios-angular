import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { SubCategoriaService } from 'src/app/services/sub-categoria.service';
import { global } from '../../services/global';
declare var $:any;

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  public producto: Productos;
  public status: string;
  public servicioNeg: any[];
  public subCategorias: any[];
  public url;
  public imagen;
  public activos = 0;
  public idProducto = 0;
  public imagenesProducto = [];
 
  // para cargar la imagen al servidor
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
    hideSelectBtn: false,
    attachPinText: 'Subir imagenes del producto'
};
  constructor(
    private _productoService: ProductosService,
    private _categoriaService: CategoriaService,
    private _subCategoria: SubCategoriaService
    ) {
    this.producto = new Productos('', 1);
    this.url = global.url;
    this.jquery();
    
   }
   

  ngOnInit() {
    this.categorias();
  }


  detectFiles(event) {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0]['name']);
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
        this._productoService.subirImagen(event).subscribe( data => {
          console.log(data);
        });
      }
      reader.readAsDataURL(event.target.files[0]);
    }
    }


  categorias(){
    this._categoriaService.getCategorias().subscribe( data => {
      //console.log(data['categorias']);
      this.servicioNeg = data['categorias'];
    },error => {
      console.log(error);
    });
  }
  upload(imagen){
    console.log(imagen);
    alert('hola');
  }

  servicios(valor){
    this._subCategoria.getSubCategoria(valor).subscribe( data => {
      console.log(data['subCategoria']);
      this.subCategorias = data['subCategoria'];
    },error => {
      console.log(error);
    })
    //alert('hola '+ valor);
  }

  registroProducto(form){
    console.log(this.producto);
    this._productoService.registrarProducto(this.producto).subscribe( response => {
      console.log(response);
      if(response.status == 'success'){
        this.status = response.status;
        this.idProducto = response.producto.id;
        form.reset();
        this.activos = 2;
      } else {
        this.status = "error";
      }
      
    },
    error =>{
      console.log(<any>error);
    });
  }

  avatarUpload(datos){
    let data = JSON.parse(datos.response);
    this.imagen = data.imagen;
    console.log(datos.response);
    let imagenes = {
      mul_nombre : this.imagen,
      mpro_prod_id: this.idProducto
    }
    this._productoService.guardarImagenBd(imagenes).subscribe(response => {
      this._productoService.getImagenProducto(this.idProducto).subscribe(image => {
        console.log(image);
        this.imagenesProducto = image.imagenes;
        console.log(this.imagenesProducto);
      });
      console.log(response);
    })
    
    
    //console.log(this.imagen);
  }

  jquery(){
    $('#pasos').css('color','red !important');
    $('.des').attr("disabled", false);
    
    
  }
  // permite eliminar una imagen del producto
  public EliminarImagenProducto(id, nombre){
    //alert('hola '+ id);
    var misImagenes = {mul_id: id, mul_nombre: nombre}
    this._productoService.deleteImagenProducto(id).subscribe(response => {
      console.log(response);
      this.imagenesProducto = this.imagenesProducto.filter(c => c.mul_id !== misImagenes.mul_id);
      //this.RemoverElementoDeArray(this.imagenesProducto, id)
    });

    //
    //
  }
  public eventoPasos(){
    //alert(this.activos);
  }

  RemoverElementoDeArray(array, item) {
    for (var i = 0; i < array.length; i++) {
      // This if statement depends on the format of your array
      if (array[i][0] == item) {
        array.splice(array[i][0],array[i][1]);
        alert("SE ELIMINO EL REGISTRO");
        return true; // Found it
      }
    }
    return false; // Not found
  }
  

}
