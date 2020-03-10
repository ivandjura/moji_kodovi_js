 export  class Pacijent {
    constructor(i, t, v) {
      this.ime = i;
      this.tezina = t;
      this.visina = v;
    }
    spampaj() {
      console.log(
        `Podatci pacijenta su ime ${this.ime}, tezina${this.tezina}, ${this.visina}`
      );
    }
    bmi() {
      let bmi = this.tezina / this.visina ** 2;
      return bmi;
    }
    kritican() {
      if (this.bmi < 15 || this.bmi > 40) {
        return true;
      } else {
        return false;
      }
    }
  }