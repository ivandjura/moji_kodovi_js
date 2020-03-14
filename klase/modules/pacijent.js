<<<<<<< HEAD
// Modul pacijent.js

export default class Pacijent {
    constructor(i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
=======
 export default class Pacijent {
    constructor(i, t, v) {
      this.ime = i;
      this.tezina = t;
      this.visina = v;
>>>>>>> a085ac5f83e4cd15dafd4531d6c11fa63f9b0279
    }
    stampaj() {
        console.log(`Pacijent: ${this.ime}, visina: ${this.visina}, tezina: ${this.tezina}`);
    }
    bmi() {
        let bmi = this.tezina / this.visina ** 2;
        return bmi;
    }
    kritican() {
        let bmi = this.bmi();
        if(bmi < 15 || bmi > 40) {
            return true;
        }
        else {
            return false;
        }
    }
}