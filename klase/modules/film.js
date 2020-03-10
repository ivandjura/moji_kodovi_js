
 export default class Film {
    constructor(n, r, g) {
      this.naslov = n;
      this.resiser = r;
      this.godinaIzdanja = g;
    }
    prikazi() {
      let n = this.naslov;
      let g = this.godinaIzdanja;
      let r = this.resiser;
      console.log(`Moj omiljeni film '${g}' godine je ${n} od rezisera ${r}`);
    }
    set fNaslov(n){
        return this.naslov
    }
    get fNaslov(){
        this.naslov=n
    }
    set fReziser(r){
        return this.resiser

    }
    get fReziser(){
        this.resiser= r
    }
    set fGodinaizdanja(g){
        if(g> 1800){
            this.godinaIzdanja=g
        }
        else{
            this.godinaIzdanja=1800
        }
    }
    
  }

  