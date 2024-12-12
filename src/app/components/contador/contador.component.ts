import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {
  kont:number=0;
  kontGora100(){
    this.kont+=100;
  }
  kontGora50(){
    this.kont+=50;
  }
  kontGora25(){
    this.kont+=25;
  }
  kontGora10(){
    this.kont+=10;
  }
  kontGora5(){
    this.kont+=5;
  }
  kontGora1(){
    this.kont++;
  }
  reset(){
    this.kont=0;
  }
  kontBehera1(){
    this.kont--;
  }
  kontBehera5(){
    this.kont-=5;
  }
  kontBehera10(){
    this.kont-=10;
  }
  kontBehera25(){
    this.kont-=25;
  }
  kontBehera50(){
    this.kont-=50;
  }
  kontBehera100(){
    this.kont-=100;
  }
  bistan:boolean=false;
  erakutsi(){
    if(this.bistan==false){
      this.bistan=true;
    } else{
      this.bistan=false;
    }
  }
}
