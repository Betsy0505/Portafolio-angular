import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion = {};
  id!: string;

  constructor( private route: ActivatedRoute, 
    public ProductoService: ProductosService ) { }


  ngOnInit() {

    this.route.params
    .subscribe( parametros => { //todos los parametros que nosotros recibamos por el url
      // console.log(parametros['id']); // se especifica que solo el id ya no como {id: "prod-2"} sino prod-2 nada mas

      this.ProductoService.getProducto(parametros['id']) //para obtener el id del producto 
          .subscribe( (producto: ProductoDescripcion) => {
            this.id = parametros['id'];
              this.producto = producto;
              
          }); // para que yo lo pueda usar 
      
    });
  }
  

}
