export class Autobus {
  //konstruktor
  constructor(rb, bs) {
    this.regBr = rb;
    this.brSedista = bs;
  }
  //geter i i seteri
  set regBr(rb) {
    this._regBr = rb;
  }
  set brSedista(bs) {
    this._brSedista = bs;
  }
  get regBr() {
    return this._regBr;
  }
  get brSedista() {
    return this._brSedista;
  }

  spampaj(){
      console.log(`Autobus : ${this.regBr} , ${this.brSedista}`);
  }
}
