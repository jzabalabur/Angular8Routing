import { BotonesService } from './botones.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ejercicio8routing';
  admin:boolean=false;
  constructor(private router: Router, public botonesService:BotonesService){
  }

  accesoAdmin(){
    this.admin=confirm("¿Eres administrador?");
    if(this.admin==true){
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['home']);
    }
  }
  imagenes(){
    this.botonesService.setbotonesImg(true);
    this.router.navigate(['imagenes']);

  }
  diferencias(){
    this.botonesService.setbotonesImg(false);
    this.router.navigate(['imagenes/diferencias']);

  }
  peliculas(){
    this.botonesService.setbotonesImg(false);
    this.router.navigate(['imagenes/peliculas']);

  }
}
