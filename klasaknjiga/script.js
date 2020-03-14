import { Knjiga } from "./knjiga.js";
let k1 = new Knjiga("Na drini Cuprija", "Ivo Andric", 2003, 1300, 44430);
k1.stampaj();
let k2 = new Knjiga("Orlovi rano lete", "Branko Copic", 2006, -185, -340);
k2.stampaj();
console.log(k1.obimna());

if (k1.obimna()) {
  console.log("Knjiga je obimna");
} else {
  console.log("Knjiga nije obimna");
}

console.log(k1.skupa());

console.log(k2.obimna());
k1.dugackoIme();

//Napraviti niz od barem tri knjige

let k3 = new Knjiga("Ana Karenjina", "Leo Tolstoj", 1996, 1200, 8300);

let nizKnjiga = [k1, k2, k3];

nizKnjiga.forEach(elem => {
  elem.stampaj();
});
//Ispisati sve one knjige koje su istovremeno i skupe i obimne
console.log("Skupe i obimne knjige");
nizKnjiga.forEach(elem => {
  if (elem.skupa() && elem.obimna()) {
    elem.stampaj();
  }
});

/*Napraviti funkicju kojoj se prosleđuje niz knjiga a ona određuje:
 ukupnaCena - Koliko ukupno koštaju sve knjge u nizu knjiga
 prosecnaCena - Kolika je prosečna cena knjige
 prosecnaStranica - Kolika je prosečna cena stranice knjige
*/

//ukupna cena
let ukupnaCena = niz => {
  let ukupno = 0;
  niz.forEach(elem => {
    ukupno += elem.cena;
  });
  return ukupno;
};
console.log(`Ukupna cena knjiga je ${ukupnaCena(nizKnjiga)}`);
//prosecna cena knjige
let prosecnaCena = niz => {
  let prosek = ukupnaCena(niz) / niz.length;
  return prosek;
};
console.log(`Prosecna cena knjiga je ${prosecnaCena(nizKnjiga)}`);
//ukupno stranica pravim funkciju da bi mogo da nadjem za zadatak prosecna cena stranice knjige
let ukupnoStranica = niz => {
  let ukupno = 0;
  niz.forEach(elem => {
    ukupno += elem.brojStrana;
  });
  return ukupno;
};

//prosecno stranica knjige Kolika je prosečna cena stranice knjige
let prosecnaStranica = niz => {
  let cena = ukupnaCena(niz);
  let str = ukupnoStranica(niz);
  let rez = cena / str;
  return rez;
};
console.log(`Prosecna cena po stranici svih knjiga je : ${prosecnaStranica(nizKnjiga)}`)

