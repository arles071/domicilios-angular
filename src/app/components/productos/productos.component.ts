import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public idProducto = 27;
  public imagenesProducto;
  public url;
  constructor(private _productoService: ProductosService) {
      this.url = global.url;
   }

  ngOnInit() {
    this._productoService.getImagenProducto(this.idProducto).subscribe(image => {
      console.log(image);
      this.imagenesProducto = image.imagenes;
      console.log(this.imagenesProducto);
    });
  }

}
