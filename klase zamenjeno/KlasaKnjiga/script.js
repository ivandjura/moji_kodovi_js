import{Knjiga} from "./knjiga.js";

//naslov, autor, godIzdanja, brojStrana i cena
let k1 = new Knjiga('Na Drini ćuprija', 'Ivo Andrić', 2003, 1300, 44430);
k1.stampaj();
console.log(k1.obimna());
if(k1.obimna()){
    console.log('Knjiga je obimna');
} else {
    console.log('Knjiga nije obimna');
}
console.log(k1.skupa());
k1.dugackoIme();

let k2 = new Knjiga('Orlovi rano lete', 'Branko Ćopić', 2006, -185, -340);
k2.stampaj();

let k3 = new Knjiga('Ana Karanjina', 'Tolstoj', 1996, 1200, 8300);

let nizKnjiga = [k1, k2, k3];
nizKnjiga.forEach( elem => {
    elem.stampaj();
});

/*Ispisati sve one knjige koje su istovremeno i skupe i obimne*/
console.log("Skupe i obimne knjige:");
nizKnjiga.forEach( elem => {
    if(elem.skupa() && elem.obimna()){
        elem.stampaj();
    }
});

/*ukupnaCena - Koliko ukupno koštaju sve knjge u nizu knjiga*/
let ukupnaCena = (niz) => {
    let ukupno = 0;
    niz.forEach( elem => {
        ukupno += elem.cena;
    });
    return ukupno;
};
console.log(`Ukupna cena knjiga je: ${ukupnaCena(nizKnjiga)}`);

/*prosecnaCena - Kolika je prosečna cena knjige*/
let prosecnaCena = (niz) =>{
    let prosek = ukupnaCena(niz) / niz.length;
    return prosek;
};
console.log(`Prosečna cena knjiga je: ${prosecnaCena(nizKnjiga)}`);

//ukupnoStranica
let ukupnoStranica = (niz) =>{
    let ukupno = 0;
    niz.forEach(elem => {
        ukupno += elem.brojStrana;
    });
    return ukupno;
};

//prosecnaStranica - Kolika je prosečna cena stranice knjige
let prosecnaStranica = (niz) =>{
    let cena = ukupnaCena(niz);
    let str = ukupnoStranica(niz);
    let rez = cena / str;
    return rez;
};
console.log(`Prosečna cena po stranici svih knjiga je: ${prosecnaStranica(nizKnjiga)}`);
