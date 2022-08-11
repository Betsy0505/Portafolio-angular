import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public _servicio: InfoPaginaService ) //una con i porque es el nombre y otra con I porque hace referencia al InfoPaginaService  
  { 

  }

  ngOnInit(): void {
  }

}
