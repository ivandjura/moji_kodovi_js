 export class Pacijent {
    constructor(i, t, v) {
      this.pime = i;
      this.ptezina = t;
      this.pvisina = v;
    }
    get pIme(){
        return this.ime
    }
    set pIme(i){
        this.ime=i
    }
    get pVisina(){
        return this.visina
    }
    set pVisina(v){
        if(v<0){
            this.visina=0
        }
        else if(v <=2.5){
            this.visina=v
        }
        else{
            this.visina=2.5;
        }
    

    }
    get pTezina(){
        return this.tezina=0
    }
    set pTezina(t){
        if(t<0){
            this.tezina=0
        }
        else if (t<=550){
            this.tezina=t
        }
        else{
            this.tezina=550
        }
    }
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