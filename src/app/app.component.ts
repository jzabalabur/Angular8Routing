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
  botonesImg:boolean=false;
  constructor(private router: Router){}

  accesoAdmin(){
    this.admin=confirm("¿Eres administrador?");
    if(this.admin==true){
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['home']);
    }
  }
  ocultarBotonesImagenes(){
    this.botonesImg=false;
  }
  mostrarBotonesImagenes(){
    this.botonesImg=true;
  }
}
