import { Component, ViewChildren, QueryList } from '@angular/core';
import { DadoComponent } from '../dado/dado.component';
@Component({
  selector: 'app-juegodados',
  templateUrl: './juegodados.component.html',
  styleUrls: ['./juegodados.component.scss']
})
export class JuegodadosComponent {
  repeticiones = [1, 2, 3];

  @ViewChildren(DadoComponent)
  dados!: QueryList<DadoComponent>;


  tirarDados(){
    this.dados.toArray().forEach(dado => dado.generarNumeroAleatorio());  }
}
