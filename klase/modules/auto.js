
 export class Auto {
    // polja marka ,boja imaKrov
    //konstruktor
    constructor(m, b, ik) {
      this.marka = m;
      this.boja = b;
      this.imaKrov = ik;
    }
    sviraj() {
      //unutar medote klase this je objekat koje je pozvao metodu
      let m = this.marka;
      console.log(`Auto marke ${m} svira:Beep Beep I am a Jeep!`);
    }
    get aMarka(){
        return this.marka
    }

    set aMarka(m){ //geter je u klasi je metoda
        if (m.includes("Citroen")) {
            console.log('Nije dozvoljena marka')
        }
        else{
            this.marka=m
        }
    
    }
    get aBoja(){
        return this.boja
    }
    set aBoja(b){
        this.boja=b
    }
    get aImaKrov(){
        return this.imaKrov;
    }
    set aImaKrov(ik){
        this.imaKrov=ik;
    }
  }