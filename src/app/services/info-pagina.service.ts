import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //servicio para conectarnos a servidores externos
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  equipo: any[] = [];

  constructor( private http: HttpClient) {
    //console.log('servicio de infoPagina listo :D');

    this.cargarInfo();
    this.cargarEquipo();

    //leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
        
      });

   }

   private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {

      this.cargada = true;
      this.info = resp;
    });
   }

   private cargarEquipo() {
     // leer el archivo JSON
    this.http.get('https://angular-html-4fc39-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: any) => {

      this.equipo = resp;
      
    });
    
   }
}
