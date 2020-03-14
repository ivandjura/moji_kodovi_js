import { Sportista } from "./sportista.js";

 export class Kosarkas extends Sportista {
  constructor(i, p, g, gr, po) {
    super(i, p, g, gr);
    this.poeni = po;
  }
  set poeni(po) {
    this._poeni = po;
  }
  get poeni() {
    return this._poeni;
  }
  ispisiKosarkasa() {
    console.log(`Kosarkas ${this.ime} ${this.prezime}`);
  }
}
