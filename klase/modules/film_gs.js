// Modul film_gs.js

export class Film {
  constructor(n, r, g, o) {
    this.fNaslov = n;
    this.fReziser = r;
    this.fGodinaIzdanja = g;
    this.fOcene = o;
  }
  stampaj() {
    console.log(
      `Film '${this.naslov}' rezirao ${this.reziser}, ${this.godinaIzdanja}. godine`
    );
  }
  get fNaslov() {
    return this.naslov;
  }
  set fNaslov(n) {
    this.naslov = n;
  }
  get fReziser() {
    return this.reziser;
  }
  set fReziser(r) {
    this.reziser = r;
  }
  get fGodinaIzdanja() {
    return this.godinaIzdanja;
  }
  set fGodinaIzdanja(g) {
    if (g > 1800) {
      this.godinaIzdanja = g;
    } else {
      this.godinaIzdanja = 1800;
    }
  }
  get fOcene() {
    return this.ocene;
  }
  set fOcene(o) {
    this.ocene = o;
  }
  //Napraviti metod prosek koji vraća prosečnu ocenu 

  prosecna() {
    let s = 0;
    let br = this.ocene.length;
    let niz = this.ocene;

    niz.forEach(elem => {
      s += elem;
    });
    let arst = s / br;
    return arst;
  }
}


