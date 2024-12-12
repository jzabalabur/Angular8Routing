import { Component, ViewChildren, QueryList } from '@angular/core';
import { DadoComponent } from '../dado/dado.component';
@Component({
  selector: 'app-juegodados',
  templateUrl: './juegodados.component.html',
  styleUrls: ['./juegodados.component.scss']
})
export class JuegodadosComponent {

    dados: number[] = [1, 1, 1];
    mensaje:string='';
    ngOnInit(): void {
      this.tirarDados();
    }

    tirarDados() {
      this.dados = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1
      ];
      this.comprobarNumeros(this.dados);
    }

    comprobarNumeros(dados:number[]){
      if(dados[0]===dados[1]&&dados[1]===dados[2]){
        this.mensaje="GANASTE!";
      } else {
        this.mensaje="PERDISTE!";
      }
    }







  // @ViewChildren(DadoComponent)
  // dados!: QueryList<DadoComponent>;


  // tirarDados(){
  //   this.dados.toArray().forEach(dado =>{
  //     console.log(dado);
  //     dado.generarNumeroAleatorio();}

  //   );

  // }
}
