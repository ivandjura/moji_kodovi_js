import { Osoba } from "./klase/osoba.js";
import { Zaposleni } from "./klase/zaposleni.js";
import { Sportista } from "./klase/sportista.js";
import { Kosarkas } from "./klase/kosarkas.js";
let o1 = new Osoba("Ivan", "Djuraskovic", 1984);
o1.ispisiOsobu();

let z1 = new Zaposleni("Pera", "Peric", 1976, 54000, "ekonomista");
z1.ispisiZaposlenog();
z1.ekonomista();

let z2 = new Zaposleni("Mika", "Mikic", 1990, 50000, "ucitelj");
z2.ekonomista();

/*Napisati funkciju prosekPlate kojoj se prosleđuje 
niz radnika a ona vraća prosečnu platu radnika.
*/

let radnici = [z1, z2];

let prosecnaPlata = niz => {
  let s = 0;
  niz.forEach(elem => {
    s += elem.plata;
  });
  let arsr = s / niz.length;
  return arsr;
};
console.log(`Prosecna plata je ${prosecnaPlata(radnici)}`);

/* Napisati metod natprosecnaPlata koja vraća true ukoliko osoba
 ima natprosečnu platu, u suprotnom vraća false.
*/

let avg = prosecnaPlata(radnici);
console.log(z1.natprosecnaPlata(avg));
//z1 natprosecnaPlata(prosecnaPlata(radnici))
console.log(z2.natprosecnaPlata(avg));

let s1 = new Sportista("Laza", "Lazic", 1997, "Beograd");
s1.ispisiSportistu();

let k1 = new Kosarkas("Vlade", "Divac", 1968, "Prijepolje", [
  24,
  36,
  40,
  12,
  21,
  30
]);

let k2 = new Kosarkas("Pedja ", "Stojakovic", 1977, "Pozega", [
  50,
  20,
  12,
  10,
  25
]);

let k3 = new Kosarkas("Nikola", "Jokic", 1995, "Sombor", [40, 30, 27, 10]);

k1.ispisiKosarkasa();
let kosarkasi = [k3, k2, k1];

/*Napisati funkciju najviseUtakmica koja vraća košarkaša koji je odigrao najveći broj utakmica.
 */
let najviseUtakmica = niz => {
  let naj = niz[0];
  let najUt = niz[0].poeni.length;

  niz.forEach(elem => {
    let d = elem.poeni.length;
    if (najUt < d) {
      najUt = d;
      naj = elem;
    }
  });
  return naj;
};

najviseUtakmica(kosarkasi).ispisiKosarkasa();

/*Napisati funkciju najvisePoena koja vraća košarkaša koji je postigao najveći broj poena na jednoj utakmici.
 */

let najvisePoena = niz => {
  let maks = niz[0].poeni[0];
  let maksKos = niz[0];
  niz.forEach(k => {
    let poeni = k.poeni;
    poeni.forEach(p => {
      if (p > maks) {
        maks = p;
        maksKos = k;
      }
    });
  });
  return maksKos;
};
najvisePoena(kosarkasi).ispisiKosarkasa();
