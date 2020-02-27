let prosek = [0.4, 3.9, 5.6, 11, 18.1, 20.1, 22.1, 21.4, 18.5, 4.5, 2.4];

let dan = {
  datum: "2020/02/24",
  kisa: false,
  sunce: true,
  oblacno: true,
  temperature: [-2, 3, 7, 12, 12, 11, 6, 2, -1],
  //metoda koja vraca prosecnu temperaturu za dan
  prosek: function() {
    let temp = this.temperature;
    let suma = 0;
    temp.forEach(t => {
      suma += t;
    });
    let p = suma / temp.length;
    return p;
  },
  //Prebrojava koliko merenja je bilo sa natprosečnom temperaturom.

  brojNadProsek: function() {
    let p = this.prosek();
    let temp2 = this.temperature;
    let broj = 0;
    temp2.forEach(t => {
      if (t > p) {
        broj++;
      }
    });
    return broj;
  },
  //Prebrojava koliko merenja je bilo sa maksimalnom temperaturom
  brojMaksimalnih: function() {
    temp3 = this.temperature;
    max = temp3[0];
    // moze i foreach i for petlja
    for (let i = 1; i < temp3.length; i++) {
      if (temp3[i] > max) {
        max = temp3[i];
      }
    }

    let broj = 0;
    temp3.forEach(t => {
      if (t == max) {
        broj++;
      }
    });
    return broj;
  },
  //Prima dva parametra koji predstavljaju dve temperature, a //koja broji koliko merenja je bilo između ove dve temperature.
  brojIzmedju: function(t1, t2) {
    let broj = 0;
    let temp4 = this.temperature;
    temp4.forEach(t => {
      if (t1 <= t && t <= t2) {
        broj++;
      }
    });
    return broj;
  },
  //Proverava da li je u većini dana temperatura bila iznad proseka ili ne.
  iznadProsek: function() {
    let p = this.prosek();
    let temp5 = this.temperature;
    let brojIznad = 0;
    let brojIspod = 0;
    temp5.forEach(t => {
      if (t >= p) {
        brojIznad++;
      } else {
        brojIspod++;
      }
    });
    if (brojIznad > brojIspod) {
      return true;
    } else {
      return false;
    }
  },
  ledeniDan: function() {
    let temp6 = this.temperature;
    for (let i = 0; i < temp6.length; i++) {
      if (temp6[i] >= 0) {
        return false;
      }
    }
    return true;
  },
  //Proverava da li je dan bio tropski. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena.
  tropskiDan: function() {
    let temp7 = this.temperature;
    let tropski = true;
    temp7.forEach(t => {
      if (t < 24) {
        tropski = false;
      }
    });
    return tropski;
  },
  //Proverava da li je dan bio nepovoljan za meteropate. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni.
  nepovoljan: function() {
    let temp8 = this.temperature;
    for (let i = 0; i < temp8.length - 1; i++) {
      // temp[i] je tekuci element
      //temo[i+1] je njegov sledbenik
      if (Math.abs(temp8[i + 1] - temp8[i]) > 8) {
        return true;
        //ovde ne else i return onda prekida petlju uvek
      }
    }
    return false;
  },
  //Proverava da li je dan bio neuobičajen. Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano.
  neuobicajen: function() {
    let ok = false;
    let temp9 = this.temperature;
    temp9.forEach(t => {
      if (this.kisa == true && t < -5) {
        ispodMinus5 = true;
      }
      if (this.oblacno && t < -5) {
        ok = true;
      }
    });
    if (this.kisa && this.oblacno && this.sunce) {
      ok = true;
    }
    return ok;
  },
  //Uvesti globalnu promenljivu prosek koja predstavlja niz od 12 brojeva, u kojoj su smeštene prosečne temperature za svaki mesec u godini. U objektu dan napisati metodu koja ispituje da li je prosečna temperatura iznad proseka za taj mesec ili ne.

  //napisati metodu koja ispituje da li je prosečna temperatura iznad proseka za taj mesec ili ne.
  iznadProsekzaMesec: function() {
    let mesecString = this.datum.substr(5, 2);
    //console.log(mesecString); //02
    let mesecCeoBroj = parseInt(mesecString); //konvertuje string u broj
    //console.log(mesecCeoBroj); da proverimo broj u konzoli
    let p = prosek[mesecCeoBroj - 1];
    //prosecna temeperatura za mesec
    let pdan = this.prosek(); //p1 kod stefana
    //prosecna temperatura za dan
    if (pdan > p) {
      return true;
    } else {
      return false;
    }
  }
};

//Prima dva parametra koji predstavljaju dve temperature. //Potrebno je da metoda vrati broj merenja u toku dana čija je //vrednost između ove dve zadate temperature.

console.log(dan.prosek());
console.log(dan.brojNadProsek());
console.log(dan.brojMaksimalnih());
console.log(dan.brojIzmedju(4, 9));
console.log(dan.brojIzmedju(-3, 5));
console.log(dan.brojIzmedju(12, 12));
console.log(dan.iznadProsek());
console.log(dan.ledeniDan());
console.log(dan.tropskiDan());
console.log(dan.nepovoljan());
console.log(dan.neuobicajen());
console.log(dan.iznadProsekzaMesec());

//Formirati niz objekata tipa dan.
let dan1 = {
  datum: "2020/2/20",
  kisa: false,
  oblacno: true,
  sunce: true,
  temperature: [-2, 1, 3, 7, 11, 11, 5]
};

let dan2 = {
  datum: "2020/2/30",
  kisa: true,
  oblacno: false,
  sunce: true,
  temperature: [2, 7, 8, , 11, 11, 13, 5, 4]
};
let dan3 = {
  datum: "2020/2/22",
  kisa: true,
  oblacno: false,
  sunce: false,
  temperature: [-7, -4, 2, 0, -2, -3]
};

let merenjaDani = [dan1, dan2, dan3];
//Napisati arrow funkciju koja ispisuje datum u kome je naviše puta izmerena temperatura. Ukoliko ima više takvih datuma, ispisati:
//prvi takav,
//poslednji takav.

let prviNajviseMerenja = dani => {
  let max = dani[0].temperature.length;
  let index = 0;
  dani.forEach((dan, i) => {
    //dani[i]=dan
    if (dan.temperature.length > max) {
      max = dan.temperature.length;
      index = i;
    }
  });
  console.log(dani[index].datum);
};

prviNajviseMerenja(merenjaDani);

let poslednjiNajviseMerenja = dani => {
  let max = dani[0].temperature.length;
  let index = 0;
  dani.forEach((dan, i) => {
    //dani[i]=dan
    if (dan.temperature.length > max) {
      max = dan.temperature.length;
      index = i;
    }
  });
  console.log(dani[index].datum);
};
console.log("test test test poruka!!!!!!!!!!!!!!!!!!!!!!!");
