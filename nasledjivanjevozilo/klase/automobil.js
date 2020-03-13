import { Vozilo } from "./vozilo.js";
export class Automobil extends Vozilo {
  constructor(t, b, rb) {
    super(t, b);
    this.regBr = rb;
  }

  set regBr(rb) {
    this._regBr = rb;
  }
  get regBr() {
    return this._regBr;
  }

  ispisiAutmobil() {
    console.log(`Automobil:${this.tip} ${this.boja} ${this.regBr}`);
  }
}
