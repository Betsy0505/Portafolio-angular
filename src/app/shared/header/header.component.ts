import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public _servicio: InfoPaginaService,
                private router: Router ) //una con i porque es el nombre y otra con I porque hace referencia al InfoPaginaService  
  { 

  }

  ngOnInit(): void {
  }

  buscarProducto ( termino: string ) {

    if(termino.length < 1) {
      return;
    }

    this.router.navigate(['/search', termino]);
    
  }

}
