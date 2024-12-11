import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { JuegodadosComponent } from './components/juegodados/juegodados.component';
import { ContadorComponent } from './components/contador/contador.component';
import { AdivinarnumeroComponent } from './components/adivinarnumero/adivinarnumero.component';
import { DadoComponent } from './components/dado/dado.component';
import { AdminComponent } from './components/admin/admin.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { DiferenciasComponent } from './components/diferencias/diferencias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JuegodadosComponent,
    ContadorComponent,
    AdivinarnumeroComponent,
    DadoComponent,
    AdminComponent,
    ImagenesComponent,
    PeliculasComponent,
    DiferenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
