import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BotonesService {
  botonesImg: Boolean=false;

  constructor() { }

  getbotonesImg(): Boolean {
    return this.botonesImg;
  }
  setbotonesImg(value: Boolean) {
    this.botonesImg = value;
  }


}
