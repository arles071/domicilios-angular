import { Component, OnInit} from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ActivatedRoute } from '@angular/router';
import { isObject } from 'util';

@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.css']
})
export class NegocioComponent implements OnInit {

  public allcategorias: any[];
  public getcategorias: any[];
  public mostrarCategorias: any[] = [];
  public producto = false;
  
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _categoriaService: CategoriaService) {
      this._activatedRoute.params.subscribe( (respuesta: any) => {
        this.allCategoria();
      });
    }

  ngOnInit() {
  }

  productos(dato){
    if(dato == 'producto'){
      this.producto =  true;
    } else {
      this.producto =  false;
    }
    
  }
  
  /* 
  * optengo la consulta de todas las categorias y luego la recorro y 
  * dentro de esta optengo las categorias incritas al negocio
  * para luego ser guardadas en un array llamado mostrarCategorias
  * con un campo checked el cual esta en falso o verdadero.
  */
  allCategoria(){
    this._categoriaService.allCategorias().subscribe( cate => {
      this.allcategorias = cate['categorias'];
      this._categoriaService.getCategorias().subscribe( datos => {
        
        this.getcategorias = datos['categorias'];
        
        for(let catego of this.allcategorias){
          var existe = 'no';
        for(let getCat of this.getcategorias){
          if(getCat.cat_nombre == catego.cat_nombre){
            existe = "si";
            this.mostrarCategorias.push(
              { 
                cat_id: catego.cat_id,
                cat_nombre: catego.cat_nombre,
                checked: true
              }
            );
          }
        }
          if (existe == 'no'){
            this.mostrarCategorias.push(
              { 
                cat_id: catego.cat_id,
                cat_nombre: catego.cat_nombre,
                checked: false
              }
            );
          }
        }
      },error => {
          //console.log(error);
          this.mostrarCategorias = cate['categorias'];
      });
    });
  } 

  // evento que se ejecuta al precionar un checkbox
  foroMostrar(id_categoria){
    //alert(id_categoria);
    this._categoriaService.updateRelNegCat(id_categoria).subscribe( respuesta => {
      console.log(respuesta);
    })
  }
}

