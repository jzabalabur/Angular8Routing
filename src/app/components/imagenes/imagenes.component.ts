import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent {
  peliculas:boolean=false;
  diferencias:boolean=false;
  @Input() botonesImg:boolean=false;
  verPeliculas(){
    this.peliculas=true;
    this.diferencias=false;
  }
  verDiferencias(){
    this.peliculas=false;
    this.diferencias=true;
  }
}
