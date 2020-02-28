// roditelj elemenet
let par = document.querySelector("p");
console.log(par.parentElement); //div
console.log(par.parentElement.parentElement);

console.log(par.parentElement.children);
//kolekcija svih dece roditelja paragrafa

//braca/sestre elementi
console.log(par.nextElementSibling);
console.log(par.parentElement.nextElementSibling.children[1]); //dobijamo li
console.log(par.parentElement.parentElement.previousElementSibling); //head

// par.children -daje kolekciju html tagova(deca paragrafa)
//par.children[0]-Jedan tag -prvo dete paragrafa
//par.children[1]-jedan tag-drugo dete paragrafa
//za kolekciju je moguce koristiti for petlju

let div = par.parentElement;
let decaDiva = div.children;
for (let i = 0; i < decaDiva.length; i++) {
  console.log(decaDiva[i]);
}
//skraceno
for (let i = 0; i < par.parentElement.children.length; i++) {
  console.log(par.parentElement.children[i]);
}
// kod html kolekcija ne radi for each petlja
//tako da sledeci kod ne radi zakomentarisan
//par.parentElement.children.array.forEach(d=> {
//console.log(d)
//});
//ukoliko zelimo foreach petlju kod kolekcija moramo da kolekciju konvertujemo u niz

let niz = Array.from(par.parentElement.children);
niz.forEach(elem => {
  console.log(elem);
});

let link = document.querySelector("a");
console.log(link.getAttribute("href"));

link.setAttribute("href", "https://en.wikipedia.org/wiki/Wiki");
//ako vrednost atributa vec postoji ona se menja
link.setAttribute("id", "link1");
link.innerText = "Wikipedia";
//ako ne postji ona se postavlja
console.log(link);
//Svim linkovima na stranici postaviti da se otvaraju
//u novom tabu.
let linkovi = document.querySelectorAll("a");
linkovi.forEach(j => {
  j.setAttribute("target", "_blank");
});
//jedan je naziv atributa drugi je vrednost
//Svim slikama dodati alternativni tekst.
let slike = document.querySelectorAll("img");
slike.forEach(s => {
  s.setAttribute("alt", "mackica");
});
//Svim paragrafima postaviti atribut style tako da
//budu obojeni ljubičastom bojom.
let paragrafi = document.querySelectorAll("p");
paragrafi.forEach(pa => {
  pa.setAttribute("style", "color:purple");
});
//Sve parne paragrafe na stranici obojiti zelenom
//bojom, a sve neparne paragrafe obojiti crvenom
//bojom.
paragrafi.forEach((par, i) => {
  if (i % 2 == 0) {
    par.style.color = "green";
    par.style.padding = "15px";
    par.style.backgroundColor = "blue";
    console.log(par.style);
    //  par.setAttribute("style", "color:green");
  } else {
    par.setAttribute("style", "color:red");
    //par.style=link.style;-ceo stil jednog elementa se primenju
    //par.style.fontSize=link.style.fontSize;-pojedinacni stil jednog elementa se primenjuje
    // na drugi
  }
});

linkovi.forEach((l, i) => {
  l.style.padding = "5px";
  l.style.fontSize = "18px";
  l.style.textDecoration = "none";
  if (i % 2 == 0) {
    l.style.backgroundColor = "green";
    l.style.color = "purple";
  } else {
    l.style.backgroundColor = "blue";
    l.style.color = "white";
  }
});

//dodavanje i i brisanje klasa
par.classList.add("error"); //dodavanje klase elementu
console.log(par.classList);
par.classList.remove('error'); //brisanje klase elementu
par.classList.toggle('error') // switch za klase tj, toggle