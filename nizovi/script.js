let cars = ["Toyota", "BMW", "Opel"];
console.log(cars);

console.log(cars[0]);
console.log(cars[2]);
console.log(cars[3]);

// niz od n elemenata
// indeksi su:0,1,2,..., n-1

cars[1] = "Ford";
console.log(cars);

let test = [6.07, "Sreda", false];
//mogu biti i brojevi i stringovi i logicke vrednosti
console.log(test);

//ispis svih elemenata niza
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// ispis svih elemenata niza razlika -i umesto strogo <

for (let i = 0; i <= cars.length - 1; i++) {
  console.log(cars[i]);
}

//ispis svih elemenata unazad obrnutom rasporedu
for (let i = cars.length - 1; i >= 0; i--) {
  //i=2,1,0
  console.log(cars[i]);
}

//zadatci sa slajda

//let niz=[5,-9,6,-4,-5,5,9,9,8,0,-2];

let niz = [1, 2, 3, 4, 5];
let suma = 0;
for (let i = 0; i < niz.length; i++) {
  suma = suma + niz[i];
}
console.log(suma);

//3 Odrediti proizvod elemenata celobrojnog niza.

let proizvod = 1;
for (let i = 0; i < niz.length; i++) {
  proizvod = proizvod * niz[i];
}
console.log(proizvod);

//4 odrediti srednju vrednost elemenata celobrojnog niza.
suma = 0;
for (let i = 0; i < niz.length; i++) {
  suma = suma + niz[i];
}
//paziti na 0
let srvr;
{
  if (niz.length == 0) {
    srvr = 0;
  } else {
    srvr = suma / niz.length;
  }
}
console.log(srvr);

//5 Odrediti maksimalnu vrednost u celobrojnom nizu.

niz = [5, -9, 6, -4, -5, 5, 9, 9, 8, 0, -2];
let max = niz[0]; //greska da kazemo max=0 !
for (let i = 1; i < niz.length; i++) {
  if (niz[i] > max) {
    max = niz[i];
  }
}
console.log(max);
//6 Odrediti minimalnu vrednost u celobrojnom nizu.

let min = niz[0];
for (let i = 1; i < niz.length; i++) {
  if (niz[i] < min) {
    min = niz[i];
  }
}
console.log(min);

//napisati arrow funciju koja vraca minimalni element niza

let minArrow = niz => {
  let min = niz[0];
  for (i = 1; i < niz.length; i++) {
    if (niz[i] < min) {
      min = niz[i];
    }
  }
  return min;
};

console.log(minArrow(niz));
console.log(minArrow([1, -9, 3, 8, 11, 44, -66]));

// Odrediti indeks najvećeg elementa celobrojnog niza.
let maxIndex = niz => {
  let max = niz[0]; //vrednost maksimalnog elementa niza
  let index = 0; // index maksimalnog elementa niza
  for (let i = 1; i < niz.length; i++) {
    if (niz[i] > max) {
      max = niz[i];
      index = i;
    }
  }
  return index;
};
console.log(maxIndex(niz));
console.log(maxIndex([1, 8, 7, 8, 4]));

//Odrediti broj elemenata celobrojnog niza koji su
//veći od srednje vrednosti.

//Napisati arrow funckiju koja vraca broje elemenata
//celobrojnog niza koji su veci od sr.vr.
let arSr = niz => {
  let suma = 0;
  for (let i = 0; i < niz.length; i++) {
    suma += niz[i];
  }
  return suma / niz.length;
};
console.log(arSr(niz));

let brojSrVr = niz => {
  let srvr = arSr(niz);
  let broj = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > srvr) {
      broj++;
    }
  }
  return broj;
};
console.log(brojSrVr(niz));

// 10 Izračunati zbir pozitivnih elemenata celobrojnog
//niza.

let zbirPoz = niz => {
  let suma = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > 0) {
      suma += niz[i];
    }
  }
  return suma;
};
console.log(zbirPoz(niz));

//11 Odrediti broj parnih elemenata u celobrojnom nizu.
let brPar = niz => {
  let broj = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0) {
      broj++;
    }
  }
  return broj;
};

console.log(brPar(niz));
// 12 Odrediti broj parnih elemenata sa neparnim indeksima.
let brParNepInd = niz => {
  let broj = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0 && i % 2 != 0) {
      broj++;
    }
  }
  return broj;
};
console.log(brParNepInd(niz));

//14 Promeniti znak svakom elementu celobrojnog niza.
let promeniZnak = niz => {
  for (let i = 0; i < niz.length; i++) {
    niz[i] *= -1;
  }
};
promeniZnak(niz);
console.log(niz);

//Dat je niz stavki za kupovinu (članovi niza su stringovi).
//Prolaskom kroz niz napraviti neuređenu listu i ispisati je u
//html dokument.

//formirati ul listu

let lista = niz => {
  //elementi niza su stringovi
  let result = ""; //neutralni element za konkatenaciju stringova
  result += "<ul>";
  for (let i = 0; i < niz.length; i++) {
    result += `<li>${niz[i]}</li>`;
  }
  result += "</ul>";
  return result;
};
let div = document.getElementById("kupovina");
div.innerHTML = lista(["Jaja", "Mleko", "Jogurt"]);

//17 Dat je niz imena košarkaškog tima. Prolaskom kroz niz
//formirati tabelu u čijim su redovima imena tima, i tabelu
//ispisati u html dokument.

let nizTimova = ["Tim A", "Tim Bb", "Tim Ccc"];

let tabela = "<table>";
for (let i = 0; i < nizTimova.length; i++) {
  tabela += `<tr><td> ${nizTimova[i]} </td></tr>`;
}
tabela += "</table>";

let divTabela = document.getElementById("tabela");
divTabela.innerHTML = tabela;

/*
<table>
  <tr><td>Tim A</td></tr>
  <tr><td>Tim B</td></tr>
  <tr><td>Tim C</td></tr>
</table>


*/

//da idu u istom redu

tabela = "<table><tr>";
for (let i = 0; i < nizTimova.length; i++) {
  tabela += `<td> ${nizTimova[i]} </td>`;
}
tabela += "</tr></table>";

divTabela = document.getElementById("tabela2");
divTabela.innerHTML = tabela;

//18 zadatakDat je niz stringova čiji su članovi putanje do slika.
//Prikazati sve sliku u html dokumentu sa putanjama
//navedenim u nizu.

let nizSlika = ["1.png", "2.png", "3.png"];
let slike = "";
for (let i = 0; i < nizSlika.length; i++) {
  slike += `<img src=${nizSlika[i]}><br>`;
}

div = document.getElementById("slike");
div.innerHTML = slike;

//Stringovi i njigovi metodi
let str = "Zdravo svete!";

//Duzina stringa
console.log(str.length);

// da li sadrzi neki karater -includes
console.log(str.includes("v"));
if (str.includes("o")) {
  console.log("String sadzri slovo o");
} else {
  console.log("String ne sadzdi slovo o");
}
// Da li sadrzi karakter na specificnoj poziciji

console.log(str.includes("Z", 0));
// prvi Indeks unetog slova=indexOf
console.log(str.indexOf("e"));
//poslednji index unetog slova-lastIndexOf
console.log(str.lastIndexOf("e"));
//Prvo slovo reci-startWith
console.log(str.startsWith("Z"));
//Poslednje slovo reci-endsWith
console.log(str.endsWith("?"));

//slice- odakle poceti podstring(od koje pozicije),gde zavrsiti podstring(do koje pozicije)
console.log("***");
console.log(str.slice(3, 5));
//let str = "Zdravo svete!";
//substr- odakle poceti(od koje pozicije) podstring,gde zavrsiti (do koje pozicije)
//koliko elemenata od te pozicije na dalje uzeti
console.log(str.substr(3, 5));

//replace
console.log(str.replace("dra", "w"));

//19 zadatak Ispisati dužinu svakog elementa u nizu stringova.
for (let i = 0; i < nizTimova.length; i++) {
  let duzReci = nizTimova[i].length;
  console.log(duzReci);
  //console.log(nizTimova[i].length)
}
//20 Odrediti element u nizu stringova sa najvećom dužinom.
//let nizTimova=["Tim A","Tim Bb","Tim Ccc"];

//preko arrow funcije
let najDuzaRec = nizTimova => {
  let maks = nizTimova[0].length;
  let maksRec = nizTimova[0];
  for (let i = 1; i < nizTimova.length; i++) {
    if (maks < nizTimova[i].length) {
      maks = nizTimova[i].length;
      maksRec = nizTimova[i];
    }
  }
  return maksRec;
};
console.log(najDuzaRec(nizTimova));

// bez funcije smao petlja
let maks = nizTimova[0].length;
for (let i = 0; i < nizTimova.length; i++) {
  if (maks < nizTimova[i].length) {
    maks = nizTimova[i].length;
  }
}
console.log(maks);

// prosek slova u nizu
let prosekSlova = nizTimova => {
  let brojslovasuma = 0;
  for (let i = 0; i < nizTimova.length; i++) {
    brojslovasuma += nizTimova[i].length;
  }
  let arSr = brojslovasuma / nizTimova.length;
  return arSr;
};
console.log(prosekSlova(nizTimova));

nizTimova = ["Tim A", "Tim Bb", "Tim Ccc", "Tim DDDD"];
// ispisati nadprosecno dugacke reci
let natrosecnoDugacke = niz => {
  let ar = prosekSlova(niz);
  for (let i = 0; i < niz.length; i++) {
    if (ar < niz[i].length) {
      console.log(niz[i]);
    }
  }
};
natrosecnoDugacke(nizTimova);

//21 Odrediti broj elemenata u nizu stringova čija je dužina
//veća od prosečne dužine svih stringova u nizu.
let brojnatrosecnoDugih = niz => {
  let ar = prosekSlova(niz);
  let br = 0;
  for (let i = 0; i < niz.length; i++) {
    if (ar < niz[i].length) {
      br++;
    }
  }
  return br;
};

console.log(brojnatrosecnoDugih(nizTimova));

// 22.Odrediti broj elemenata u nizu stringova koji sadrže slovo
//'a'.
let brojElemenataSaKarakterom = (niz, slovo) => {
  let br = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i].includes(slovo)) {
      br++;
    }
  }
  return br;
};

console.log(brojElemenataSaKarakterom(nizTimova, "D"));

// Odrediti broj elemenata u nizu stringova koji počinju na
//slovo 'a' ili 'A’.
let brojElemenataKojiPocinjuSlovom = (niz, slovo) => {
  let br = 0;
  for (let i = 0; i < niz.length; i++) {
    // slovo.toUpperCase()-za pretvaranje slova u veliko slovo
    // slovo.toLowerCase()-za pretvaranje slova u malo slovo
    if (
      niz[i].startsWith(slovo.toLowerCase()) ||
      niz[i].startsWith(slovo.toUpperCase())
    )
      br++;
  }
  return br;
};

console.log(brojElemenataKojiPocinjuSlovom(nizTimova, "y"));
console.log(brojElemenataKojiPocinjuSlovom(nizTimova, "t"));
console.log(brojElemenataKojiPocinjuSlovom(nizTimova, "T"));
//24
//push komanda

let a = [2, 5, 7];
let b = [-7, -5, -9];
let c = [];

for (let i = 0; i < a.length; i++) {
  c.push(a[i]);
  c.push(b[i]);
}
console.log(c);

//pop komanda izbacivanje poslednjeg elementa iz niza pop() metodom
console.log(c.pop());
console.log(c);

//25
let proizvodElemenata = (a, b) => {
  let c = [];
  for (let i = 0; i < b.length; i++) {
    c.push(a[i] * b[i]);
  }
  return c;
};
console.log(proizvodElemenata(a, b));
//26

a = [2, 4, 6, 8, 10, 12];
//   0  1  2  3   4   5
b = [];
let n = a.length / 2;
for (let i = 0; i < n; i++) {
  let i_pom = a.length - i - 1;
  b.push((a[i] + a[i_pom]) / 2);
}
console.log(b);

let noviNiz = niz => {
  let result = [];
  for (i = 0; i < n / 2; i++) {
    result.push((niz[i] + niz[i + niz.length / 2]) / 2);
  }
  console.log(result);
  return niz;
};
a = [9, 4, 5, 8, 9, 1];
noviNiz(a);
