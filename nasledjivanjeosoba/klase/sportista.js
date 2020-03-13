import { Osoba } from "./osoba.js";

export class Sportista extends Osoba {
  constructor(i, p, g, gr) {
    super(i, p, g);
    this.gradRodjenja = gr;
  }
  set gradRodjenja (gr){
      this._gradRodjenja=gr
  }
  get gradRodjenja(){
      this._gradRodjenja
  }
  ispisiSportistu(){
      console.log('Sportista')
  }

}
