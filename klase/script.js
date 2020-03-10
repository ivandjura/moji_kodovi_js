let datum = new Date();
//ime klase
//new Date();kreira objekat klase Date
// let datum=new Date() znaci promenljiva datum cuva objekat klase Date
console.log(datum.getDay());

let niz1 = [1, 2, 3];
let niz2 = new Array(1, 2, 3);
console.log(niz1);
console.log(niz2);
console.log(niz1.length);

let o1 = {
  ime: "Pera",
  godine: 25
};
let o2 = new Object();
o2.ime = "Pera";
o2.godine = 25;
console.log(o1);
console.log(o2);
// klasa Auto
// Unutar klasa i objekata metode se pisu kao obicne funkcije NIKADA kao arrow funkcije
import {Auto} from "./modules/auto.js"
import Film from "./modules/film.js"
import Pacijent from "./modules/pacijent.js"
import {Pacijent as PacijentGS} from "./modules/pacijent_gs.js"

let auto1 = new Auto("Peugeot 208", "bela", false);
//kao da smo pozvali kontruktor ('Peugeot 208' , "bela","false")
// kontruktor je podestio majku na auto1.marka="Peugeot 208"
//auto1.boja="bela"
//auto1.imaKrov=false
let auto2 = new Auto("Mazda CX-30", "crvena", true);
// kontruktor je podesio ("Mazda CX-30", "crvene", true);
// auto2.marka="Mazda CV-30"
//auto2.boja="crvena"
//auto2.imaKrov=true
console.log(auto1, auto2);
auto1.sviraj();
auto2.sviraj();
auto1.sviraj();

// citanje setera i getera
console.log(auto1.aMarka)// geteru se pristupa kao polju!!!!
//auto1.marka="Citrone C5"
auto1.aMarka="Citroen C5"
//seteru se pristupa kao polju
console.log(auto1.aMarka)



let film1 = new Film("There will be Blood", "Alexander Petersonn", 2010);
let film2 = new Film("No country for old men", "Cohen broders", 2011);
let film3 = new Film("Big Lebovsky", "Cohen bros", 1996);

//console.log(film1, film2, film3);
//film2.godinaIzdanja

film2.prikazi();
film1.prikazi();

//Kreirati klasu Pacijent koja od polja sadrži ime, visina i tezina. Od metoda sadrži:

let pacijent1 = new Pacijent("janko jankovic", 108, 1.9);
let pacijent2 = new Pacijent("marko markovic", 76, 1.74);
let pacijent3 = new Pacijent("stanko stankovic", 90, 1.85);

console.log(pacijent3.kritican())
console.log(pacijent3.bmi())
console.log(pacijent2.kritican())
