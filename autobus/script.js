import { Autobus } from "./autobus.js";

let a1 = new Autobus("NI-111A", 64);
let a2 = new Autobus("BG-222BB", 32);
let a3 = new Autobus("KG-333CC", 60);
a1.spampaj();

let autobusi = [a1, a2, a3];

let ispisAutobusa = autobusi => {
  autobusi.forEach(a => {
    a.spampaj();
  });
};

ispisAutobusa(autobusi);

/*Napraviti funkciju ukupnoSedista kojoj se prosleđuje niz autobusa a koja određuje i vraća koliko ukupno sedišta sadrže svi autobusi koji se nalaze u nizu autobusa.
 */
let ukupnoSedista = niz => {
  let brSedista = 0;
  niz.forEach(elem => {
    brSedista += elem.brSedista;
  });
  return brSedista;
};

console.log(`Ukupan broj Sedista je ${ukupnoSedista(autobusi)}`);
/*Napraviti funkciju ljudi kojoj se prosleđuje broj ljudi i niz autobusa a funkcija vraća true ukoliko je moguće toliko ljudi smestiti u autobuse, u suprotnom vraća false.
 */
let ljudi = (brLjudi, niz) => {
  let uk = ukupnoSedista(niz);
  if (uk >= brLjudi) {
    return true;
  } else {
    return false;
  }
};

console.log(ljudi(160, autobusi));
console.log(ljudi(156, autobusi));

