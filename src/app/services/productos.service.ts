import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { promises } from 'dns';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos : Producto[] = []; //cada uno de los items de esto es parte de los productos
  productosFiltrado: Producto[] = []

  constructor( private http: HttpClient) {

    this.cargarProductos();
}

private cargarProductos() {
  
  return new Promise<void>( (resolve, reject) => {
    
    this.http.get('https://angular-html-4fc39-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe(  (resp: any) => { //peticion de la informacion
        this.productos = resp;
        this.cargando = false; 
        resolve();
  });
  
    });

  }

  getProducto( id: string ) { //nuevo metodo para obtener el producto
    return this.http.get(`https://angular-html-4fc39-default-rtdb.firebaseio.com/productos/${ id }.json`)
    // se pone en esas comillas para que lo vea como un typescript (template literales), expresiones dentro de un string

  }

  buscarProducto ( termino: string ) {

    if( this.productos.length === 0) {
      //cargar productos
      this.cargarProductos().then(  () => {
        // ejecutar despues de tener los productos
        // aplicar filtro
        this.filtrarProductos ( termino );

      });
    } else {
      //aplicar el filtro
      this.filtrarProductos ( termino );
    }
    
  }

  private filtrarProductos ( termino: string ) {

    // console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo?.toLocaleLowerCase();

      if ( prod.categoria != undefined && tituloLower != undefined){
        if( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino) >= 0 ) {
          this.productosFiltrado.push( prod );
      }
      }

    });
    
  }
}