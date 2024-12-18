import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BotonesService } from 'src/app/botones.service';
import { __param } from 'tslib';
@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent implements OnInit{
  constructor(private router:Router, public botonesService:BotonesService){}

  ngOnInit(): void {
  }
  verPeliculas(){
    this.router.navigate(['imagenes/peliculas']);
  }
  verDiferencias(){
    this.router.navigate(['imagenes/diferencias']);
  }
}
