let ulZadataci = document.querySelector("ul");
let liZadatci = document.querySelectorAll("li");
let btnDodaj = document.querySelector("button");
let inputUnos = document.querySelector("#unesi");
/*liZadatci.forEach(elem => {
  elem.addEventListener("click", (e) => {
    e.target.remove();
    console.log('Kliknuto na Li')
    //isto je i kao i elem.remove(); al je bolje e.target.remove()
    e.stopPropagation(); // ne poziva roditeljski element
  });
});
*/

ulZadataci.addEventListener("click", e => {
  //console.log("Kliknuto na Ul")
  // console.log(e.target.tagName);
  if (e.target.tagName == "LI") {
    e.target.remove();
  }
});

let dodavanjeItema = () => {
  let NoviZadatak = document.querySelector("input").value;
  let rbDodajNaPoc = document.querySelector("#dodajNaPocetak");
};

btnDodaj.addEventListener("click", () => {
  let NoviZadatak = document.querySelector("input").value;
  let rbDodajNaPoc = document.querySelector("#dodajNaPocetak");
  let rbDodajNaKraj = document.querySelector("#dodajNaKraj");
  //console.log(rbDodajNaPoc.checked);

  if (NoviZadatak == "") {
    //izbaci alert
    alert("Morate uneti neki tekst");
  } else {
    //kreiranje novog zadatka
    let noviItem = document.createElement("li");
    noviItem.textContent = NoviZadatak;
    //da li dodati na pocetak ili kraj liste
    if (rbDodajNaPoc.checked) {
      ulZadataci.prepend(noviItem);
    } else {
      ulZadataci.append(noviItem);
    }
    //ulZadataci.append(noviItem)
    //ulZadataci.prepend(noviItem);
  }

  //brisanje iz input polja
  document.querySelector("input").value = "";

  //ulZdataci.append(noviItem) //moze i bez appendChild
  //ulZdataci.prepend(noviItem); //moze i bez prependChild
});

btnDodaj.addEventListener("click", () => {
  dodavanjeItema();
});

inputUnos.addEventListener("keyup", e => {
  if (e.keyCode == 13) {
    dodavanjeItema();
  }
});
