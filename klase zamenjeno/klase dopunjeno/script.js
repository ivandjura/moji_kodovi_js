import {Auto} from "./modules/auto.js";
import Film from "./modules/film.js";
import Pacijent from "./modules/pacijent.js";
import {Film as FilmGS} from "./modules/film_gs.js";
import {Pacijent as PacijentGS} from "./modules/pacijent_gs.js";


let auto = {
    marka: "Peugeot 208",
    boja: "bela",
    sviraj: function() {
        console.log("Beep! Beep!");
    }
};

console.log(auto.marka);;
auto.sviraj();

let datum = new Date();
    // Date - ime klase
    // new Date(); - kreira objekat klase Date
    // let datum = new Date(); - promenljiva datum cuva objekat klase Date
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

let auto1 = new Auto("Peugeot 208", "bela", false);
    // constructor("Peugeot 208", "bela", false)
    // auto1.marka = "Peugeot 208"
    // auto1.boja = "bela"
    // auto1.imaKrov = false
let auto2 = new Auto("Mazda CX-30", "crvena", true);
    // constructor("Mazda CX-30", "crvena", true)
    // auto2.marka = "Mazda CX-30"
    // auto2.boja = "crvena"
    // auto2.imaKrov = true
console.log(auto1, auto2);
auto1.sviraj();
auto2.sviraj();
auto1.sviraj();
//console.log(auto1.marka);
console.log(auto1.aMarka); // geteru se pristupa kao polju!!!
console.log(auto2.boja);
//auto1.marka = "Citroen C5";
auto1.aMarka = "Citroen C5"; // seteru se pristupa kao polju!!!
auto1.aBoja = "plava";
console.log(auto1);

let film1 = new Film("Titanik", "James Cameron", 1997);
let film2 = new Film("Ko to tamo peva", "Slobodan Sijan", 1980);
film1.stampaj();
film2.stampaj();

let p1 = new Pacijent("Pera Peric", 1.74, 74);
let p2 = new Pacijent("Laza Lazic", 1.80, 40);

console.log(p1.kritican());
console.log(p2.kritican());
p1.visina = -90;

let f1 = new FilmGS("Naked Gun", "David Zucker", 1500, [10, 8, 7, 9]);
let f2 = new FilmGS("Avatar", "Dzejms Kamerun", 2009, [3, 8.5, 9, 10, 6]);
let f3 = new FilmGS("Ambis", "Dzejms Kamerun", 1989, [10, 7, 9, 10, 9]);

//f1.fGodinaIzdanja = 1599;
console.log(f1);

let pac1 = new PacijentGS("Pera", -50, 1000);
console.log(pac1);

//Pacijenti
let pa1 = new PacijentGS('Ana', 173, 70);
let pa2 = new PacijentGS('Mira', 165, 55);
let pa3 = new PacijentGS('Mila', 176, 65);

let pacijenti = [pa1, pa2, pa3];

/*Ispisati podatke o pacijentu sa najmanjom težinom.*/
let minPac = pacijenti[0]; //cuva ceo objekat, celog pacijenta
let minTez = pacijenti[0].pTezina; //minPac.pTezina;
pacijenti.forEach( elem => {
    if(minTez > elem.pTezina){
        minPac = elem;
        minTez = elem.pTezina;
    }
});
minPac.stampaj();

/*Ispisati podatke o pacijentu sa najvećim bmi vrednošću.
*/
let maksPac = pacijenti[0];
//let maksBmi = pacijenti[0].bmi();
pacijenti.forEach(elem => {
    if(maksPac.bmi() < elem.bmi()){
        maksPac = elem;
    }
});
console.log(`Pacijent sa najvećim BMI je: `);
maksPac.stampaj();

//Niz filmova
let filmovi = [f1, f2, f3];

//Ispis ocena ovih filmova
filmovi.forEach( elem => {
    let ocene = elem.fOcene;
    ocene.forEach( o => {
        console.log(o);
    });
});

console.log(f1.prosecna());

let filmVek = (niz, odGod, doGod) => {
    niz.forEach( elem => {
        if(elem.fGodinaIzdanja>=odGod && elem.fGodinaIzdanja<=doGod){
            elem.stampaj();
        }
    });
};

filmVek(filmovi, 1999, 2020);

/*Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova*/ 

let prsecnaOcena = (niz) => {
    let sumaOcena = 0;
    let brojOcena = 0;

    niz.forEach( film => {
        let ocene = film.fOcene;
        //brojOcena += ocene.lenght;
        ocene.forEach( o => {
            sumaOcena += o;
            brojOcena++;
        });
    });

    let arsr = sumaOcena/brojOcena;
    return arsr;
};

console.log(`Prosečna ocena svih filmova je ${prsecnaOcena(filmovi)}`);

/*Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.
*/
let najboljeOcenjeni = (niz) => {
    let naj = niz[0];

    niz.forEach( film => {
        let p = film.prosecna();
        if(p > naj.prosecna()){
            naj = film;
        }
    });

    return naj;
};

console.log(`Najbolje ocenjeni film je:`);
najboljeOcenjeni(filmovi).stampaj();

