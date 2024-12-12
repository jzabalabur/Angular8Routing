import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.scss']
})

export class DadoComponent {
  @Input() numero:number=0;
  imagePath: string = ``;
  ngOnInit(): void {
    this.imagePath= `assets/img/Dado${this.numero}.jpg`;
  }







  // numero:number=Math.floor(Math.random() * 6) + 1;
  // imagePath: string = '../../../assets/img/Dado1.jpg';

  // constructor() {
  //   this.generarNumeroAleatorio();
  // }
  // generarNumeroAleatorio(){
  //   this.numero=Math.floor(Math.random() * 6) + 1;
  //   this.imagePath = `assets/img/Dado${this.numero}.jpg`;

  // }
}
