//let x=8;
let y=5;
let z=3;
let max;

/*if(x>y){
    max=x
}
else if(y>z){
    max=y
}
else {
    max=z
}; */

let a=5;
let b=9; /*uvodi se i 
treca c koja se koristi
 da se da vrednost za b tj.
  da se sacuva 5 za a */ 
let c=a;
a=b; // a=9 b=9
b=c  //
console.log(a,b);




let poeni=74;

if(poeni>90){
    console.log("Ucenik dobija 10");
}
else if(poeni>80){
    console.log("Ucenik dobija 9");
}
else if(poeni>70){
    console.log("Ucenik dobija 8");
}
else if(poeni>60){
    console.log("Ucenik dobija 7");
}
else if(poeni>50){
    console.log("Ucenik dobija 6");
}
else{
    console.log("ucenik je pao");
}



let datum=new Date();
let dan=datum.getDay();
//0-Sunday..1-monday,...6 saturday//
if(dan==0){
    console.log("danas je vikend");
}
else if(dan==6){
    console.log("danas je vikend");
}
else{ 
    console.log("Danas je radni dan")
}

//zadatak 9//
let vreme=datum.getHours()
if(vreme>=18){
    console.log("dobro vece");
}
else if(vreme>=12){
    console.log("Dobar dan")

}
else{
    console.log("Dobro jutro")
}

//zadatak 10//
let dan1=7
let mesec1=2
let godina1=2020
let dan2=5
let mesec2=4
let godina2=2020

if(godina1< godina2){
    console.log("Prvi datum se ranije desio");
}
else if (godina1>godina2){
    console.log("drugi datum se prvi desio");
}
else if (mesec1<mesec2){
    console.log("Drugi datum se prvi desio");
}
else if(dan1<dan2){
    console.log("Prvi datum se prvi desio");
}
else if(dan1>dan2){
    console.log("Drugi datum se prvi desio")
}
else{
    console.log("Datumi su isti")
}

//zadatak br.12
let p1=9
let k1=17
let p2=12
let k2=21
if ((p1<p2)&&(p2<=k2)){
    console.log("Preklapaju se");
}
else if((p2<=p1)&&(p1<=k2)){
    console.log("Preklapaju se");
}
else{
    console.log("ne preklapaju se");
}
//drugi nacin zadatka 12 kazu lakse//
 if ((p1 <=p2&&p2<=k1) || (p2<=p1 && p1<=k2))
{
    console.log("smene se preklapaju");
}
else{
    console.log("Smene se poklapaju");
}

//zadatak 13
var x=6;
let broj=7;
let paran;
//let paran;
if(broj % 2==0){
     //vazi samo u bloku//
    paran=true;
}
else{
    
    paran=false
}

console.log(paran);

let boja="plava"

switch(boja){
    case"plava":
        console.log("Odabrali ste plavu boju")
        break;
    case("zelena"):
    case("tirkizna"):
        console.log("odabrali ste nijansu zelene boje")
        break;
    case("crvena"):
        console.log("Odabrali ste crvenu boju")
        break;
    default:
        console.log("Niste odabrali ni crvenu, ni zelenu ni plavu boju")

}


let dani=3
    switch (dani)
    {case 0:
        console.log("Nedelja")
        break;
    case 1:
        console.log("Ponedeljak")
        break;
    case 2:
        console.log("Utorak")
        break;
    case 3:
        console.log("Sreda")
        break;
    case 4:
        console.log("Cetvrtak")
        break;
    case 5:
        console.log("Petak")
        break;
    case 6:
        console.log("Subota")
        break;
    default:
        console.log("unesite broj")
            //ne treba default

    }


let ocena=4
switch (ocena)
{
case 1:
    console.log("nedovoljan")
    break;
case 2:
    console.log("dovoljan")
    break;
case 3:
    console.log("dobar")
    break;
case 4:
    console.log("vrlo dobar")
    break;
case 5:
    console.log("odlican")
    break;
default:
    console.log("nema ocene")// ne treba default
    }

let paranbroj=5
    switch (paranbroj)
    {
    case 0:
        console.log("broj je nula");
        break;
    case 2:
        console.log("broj je 2");
        break;
    case 4:
        console.log("broj je 4");
        break;
    case 6:
        console.log("broj je 6");
        break;
    case 8:
        console.log("broj je 8");
        break;
    default:
        console.log("unos je pogresan");// ne treba default
        }