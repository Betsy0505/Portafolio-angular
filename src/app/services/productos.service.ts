import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos : Producto[] = []; //cada uno de los items de esto es parte de los productos


  constructor( private http: HttpClient) {

    this.cargarProductos();
}

  private cargarProductos() {

    this.http.get('https://angular-html-4fc39-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe(  (resp: any) => { //peticion de la informacion
      
        this.productos = resp;
        console.log(resp);
          this.cargando = false; 

    });
  }
}