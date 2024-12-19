import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-adivinarnumero',
  templateUrl: './adivinarnumero.component.html',
  styleUrls: ['./adivinarnumero.component.scss']
})
export class AdivinarnumeroComponent {
  numero:Number=0;
  adivinar:Boolean=false;
  numeroI = new FormControl(0);

  generarNumero(){
    Math.floor(Math.random() * 50) + 1,
    this.adivinar=true;
  }
  comprobar(){
    //??????????????
    console.log(this.numeroI);
  }
  exito(){

  }
  fracaso(){

  }
}
