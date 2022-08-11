import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //servicio para conectarnos a servidores externos
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  constructor( private http: HttpClient) {
    //console.log('servicio de infoPagina listo :D');

    //leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
        console.log( resp );

      })
   }
}
