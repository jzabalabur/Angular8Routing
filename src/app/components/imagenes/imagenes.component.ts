import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent implements OnInit{
  peliculas:boolean=false;
  diferencias:boolean=false;
  botonesImg:boolean=false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('botonesImg'));
    // this.botonesImg = this.route.snapshot.paramMap.get('botonesImg');
  }
  verPeliculas(){
    this.peliculas=true;
    this.diferencias=false;
  }
  verDiferencias(){
    this.peliculas=false;
    this.diferencias=true;
  }
}
