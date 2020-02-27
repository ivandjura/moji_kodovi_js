//query selector po imenu taga
let paragraf = document.querySelector("P");
console.log(paragraf);
let div = document.querySelector("div");
console.log(div);

//query selector po imenu klase
let klasatest = document.querySelector(".test");
console.log(klasatest);

//query selector po imenu klase
let klasaTestParagraf = document.querySelector("p.test");
console.log(klasaTestParagraf);
//query selector po id-u
let idparagraf = document.querySelector("#treci_paragraf");
console.log(idparagraf);

//query selektor za sve tagove u ovom slucaju <p>
let sviparagrafi = document.querySelectorAll("p");
console.log(sviparagrafi);
console.log(typeof sviparagrafi);

//pristupanje elementu node liste

console.log(sviparagrafi[0]);
//kretanje kroz node listu
sviparagrafi.forEach(elem => {
  console.log(elem);
});

//document.getElementsByClassName(’myClass’);
let klasaTestDoc = document.getElementsByClassName("test");
console.log(klasaTestDoc);
//neuspelo kretanje forEach petljom kroz html kolekciju
/*
klasaTestDoc.forEach(elem=>{
    console.log(elem)
});
*/
console.log(klasaTestDoc[0]);
for (let i = 0; i < klasaTestDoc.length; i++) {
  console.log(klasaTestDoc[i]);
}
//innerText-Dodavanje tekstualno sazdraja na stanici
paragraf.innerText += " Zdravo";
//innerHtml-dodavanje hmtl sadrzaja
paragraf.innerHTML += "<span>   kako si? </span>";

//vezbanje
//Selektovati sve paragrafe i u svakom od njih pridodati tekst "Vazno"

sviparagrafi.forEach(elem => {
  // elem.innerText+='Vazno'
  elem.innerHTML += "<b> VAZNO!!!!!</b>";
});

//Ispisati kvadrate brojeva od 1 do n, svaki u novom
//paragrafu

sviparagrafi.forEach((elem, index) => {
  let kv = (index + 1) ** 2;
  elem.innerText += `${kv}`;
});

//Napraviti niz od najmanje tri imena.
//Proći nizom i imena ispisati:

//Svako u novom paragrafu

let imena = ["Jelena", "Miljana", "Milena"];
sviparagrafi.forEach((elem, index) => {
  elem.innerText += ` ajde neki tekst ${imena[index]}`;
});

//U listi kao stavke liste
let lista = document.querySelector('ul');
imena.forEach(elem => {
  let item = `<li> ${elem} </li>`;
  lista.innerHTML += item;
});

//U jednoj koloni tabele
