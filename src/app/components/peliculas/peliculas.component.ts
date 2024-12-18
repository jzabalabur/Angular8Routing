import { Component } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent {
  botonSolucion:Boolean=true;
  botonAtras:Boolean=false;
imagePath:String=`assets/img/peliculas.jpg`;

verSolucion(){
  this.imagePath=`assets/img/peliculas2.jpg`;
  this.botonSolucion=false;
  this.botonAtras=true;
}
ocultarSolucion(){
  this.imagePath=`assets/img/peliculas.jpg`;
  this.botonSolucion=true;
  this.botonAtras=false;
}
}
