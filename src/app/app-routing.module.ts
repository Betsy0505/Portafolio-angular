import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component'; 
import 'animate.css';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [];
const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent }, //cuando la ruta este vacia redirigira al portafolio portafolio component
  { path: 'about', component: AboutComponent}, //redirecciones al about
  { path: 'item/:id', component: ItemComponent}, //redireccione al id del item (se le puede poner cualquier nombre en id)
  { path: 'search/:termino', component: SearchComponent}, //redireccione al termino del item 
  { path: '**', pathMatch: 'full', redirectTo: '' } //como un else, si no se selecciona cualquiera de los de arriba entonces que nos redirecciones al '' ( osea al portafolio) PATMATCH: 'full' para que lea toda la ruta 

];

@NgModule({ // esta parte esta designada para poner imports
  imports: [RouterModule.forRoot( app_routes, {
    useHash: true // <- Indicar que se use el hash
  })
],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}

 