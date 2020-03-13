import { Vozilo } from "./klase/vozilo.js";
import { Automobil } from "./klase/automobil.js";
import { Kamion } from "./klase/kamion.js";

let v1 = new Vozilo("drumsko", "crvena");
v1.isisiVozilo();
v1.vozi();

let a1 = new Automobil("drumsko", "plava", "NI-111AA");
a1.isisiVozilo();
a1.vozi();
//moze i cak
console.log(a1.boja);
a1.ispisiAutmobil();
//v1.ispisiAutmobil(); ovo ne moze zato sto je
//roditeljska klasa ne nasledjuje propertije i metode iz podklase tj.klase deteta

let k1 = new Kamion("drumsko", "siva", 4);
k1.ispisiKamion();
