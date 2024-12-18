import { Component } from '@angular/core';

@Component({
  selector: 'app-diferencias',
  templateUrl: './diferencias.component.html',
  styleUrls: ['./diferencias.component.scss']
})
export class DiferenciasComponent {
  botonSolucion:Boolean=true;
  botonAtras:Boolean=false;
imagePath:String=`assets/img/diferencias.jpg`;

verSolucion(){
  this.imagePath=`assets/img/diferencias2.jpg`;
  this.botonSolucion=false;
  this.botonAtras=true;
}
ocultarSolucion(){
  this.imagePath=`assets/img/diferencias.jpg`;
  this.botonSolucion=true;
  this.botonAtras=false;
}
}
