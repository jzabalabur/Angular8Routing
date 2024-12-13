import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { JuegodadosComponent } from './components/juegodados/juegodados.component';
import { AdivinarnumeroComponent } from './components/adivinarnumero/adivinarnumero.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContadorComponent } from './components/contador/contador.component';
import { DadoComponent } from './components/dado/dado.component';
import { DiferenciasComponent } from './components/diferencias/diferencias.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'juegodados', component: JuegodadosComponent},
  {path: 'adivinarnumero', component: AdivinarnumeroComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'contador', component: ContadorComponent},
  {path: 'imagenes/:botonesImg', component: ImagenesComponent, children:[
    {path: 'diferencias/:botonesImg', component: DiferenciasComponent},
    {path: 'peliculas/:botonesImg', component: PeliculasComponent}
    ]
  },
  {path:'**', pathMatch:'full', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
