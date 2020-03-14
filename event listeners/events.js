let dugmeZdravo = document.getElementById("zdravo");
dugmeZdravo.addEventListener("click", () => {
  console.log("ZDRAVO ZDRAVO JELENA");
  let zdravoparagraf = document.getElementById("zdravopara");
  zdravoparagraf.innerHTML += "<br>Cao Zdravo Pozdrav";
});
//1 zadatak
/*Napraviti dugme klikom na koje se u konzoli
ispisuje vrednost brojača br.
Brojač na početku ima vrednost 1, a svaki put
kada se klikne na dugme povećati vrednost
brojača za 1.

i 2 zadatak zajedno

Napraviti paragraf i vrednost prethodne funkcije
ispisivati u paragrafu umesto u konzoli.
*/

let dugmeBrojac = document.getElementById("brojac");
let br = 1;
dugmeBrojac.addEventListener("click", () => {
  br++;
  console.log(br);
  let zdravoparagraf = document.getElementById("zdravopara");
  zdravoparagraf.innerHTML = `Vrednost brojacaj je ${br}`;
});
//Napraviti dugme + i dugme -.
//Kada se klikne na dugme +, na ekranu prikazati
//vrednost brojača povećanu za 1.
//Kada se klikne na dugme -, na ekranu prikazati
//vrednost brojača smanjenu za 1.
let r = 0;
let spanRezultat = document.getElementById("rezultat");
spanRezultat.innerText = r;
let dugmePlus = document.getElementById("plus");
dugmePlus.addEventListener("click", () => {
  r++;
  spanRezultat.innerText = r;
});

//minus
let dugmeMinus = document.getElementById("minus");
dugmeMinus.addEventListener("click", () => {
  r--;
  spanRezultat.innerText = r;
});

/*Dopuniti prethodni zadatak uslovima, tako da se na
ekranu prikazuju samo pozitivni brojevi. Ukoliko je
vrednost manja od nule, na ekranu nastaviti
prikazivanje broja 0.*/

dugmeMinus = document.getElementById("minus");
dugmeMinus.addEventListener("click", () => {
  r--;
  if (r < 0) {
    r = 0;
  }
  spanRezultat.innerText = r;
});
/*3 Napraviti input polje i dugme.
U input polje treba da se unese ime neke osobe, a
na ekranu u paragrafu da se ispiše Zdravo i ime
osobe preuzeto iz input polja. */
let bp = document.getElementById("buttonPozdrav");
bp.addEventListener("click", () => {
  let vrednost = document.getElementById("inputPozdrav").value;

  let pp = document.getElementById("paragrafPozdrav");
  pp.innerText = `Zdravo ${vrednost}`;
});
/*5 zadatak Napraviti sledeću formu i rezultat računanja ispisati
u paragrafu ispod nje.*/
let btnKv = document.querySelector("#buttonKv");
let rezRacunanja = document.querySelector("#rez");
btnKv.addEventListener("click", () => {
  let br = document.querySelector("#inputKv").value;
  let kv = br * br;
  rezRacunanja.innerHTML = `Rezultat je ${kv}`;
});
//ovo sam sam uradio
let pkrg = document.querySelector("#pKruga");
let rezKruga = document.querySelector("#rez");
pkrg.addEventListener("click", () => {
  let r = document.querySelector("#inputKrug").value;
  let povr = r * r * 3.14;
  rezKruga.innerHTML = `Rezultat je ${povr}`;
});
