//window.alert("hello world!") // poruka u alert box-u

// komentar u jednoj liniji

/* 
komentar u vise linija
*/
//document.write("hello world");
console.log("Hello world!"); //poruka u konzoli browsera


document.getElementById("par1").innerHTML="ivan djuraskovic!";
console.log(55);

console.log(-3.996)

console.log("Pera");

console.log('mika');

console.log(true);
console.log(false);

//

let x=3;  // promenljiva x a vrednost je 3


console.log(x);
let y;
y=-9
x=5


console.log(x,y);


const z=8.04; /*
/ kada se uvede konstanta mora i njegna vrednosta da se 
zada koja vise ne moze da se menja*/

console.log(z);
//z=5;// Ne moze jer je z konstanta
//console.log(z);//
x="utorak";
console.log(x,y);


x="Volvo XC60" //dali su bitni veliko i malo slovo//
y='Volvo XC60'

console.log(x, y);

x="It's alright";
y='he is called "johnny"'

console.log(x,y);


x='It\'s all right "Johnny"'
y="It's all right \"Johnny\""


console.log(x, y);



x=true
y=false
console.log(x,y);

let m; //uvodim promenjlivu al joj  ne dajem vrednost, znaci nedefinisano//
console.log(m,m+3);


let age;

//console.log(age, age+3);//

let n=null

console.log(n, n+3);


let firstName='Marko';
let lastName='Markovic';
let fullName=firstName+ " "+ lastName; //moze umesto i duplih i jednostruki navodnik//
console.log(firstName,lastName,fullName);


//console.log(fullname); nepostojeca promenljiva//

//javascript je case sensitive i bitna  su mala i velika slova//
console.log(fullName.length);

x=8.7;
y=3;
let t=x*y
console.log(x,y,t);

x=5;
y=2;
t=x/y;

console.log(x, y, t);


x=6
y=4
console.log(x, y)
x=x+y
console.log(x,y)


x=8;
y=4;
x*=y;
console.log(x,y)


x=3
y=9
x++;y--;//povecava tj. smanjuje za 1//

console.log(x,y)

x=4;
y=9;

console.log(y%x); //ostatak//

x=3;
y=9;
console.log(y**x); //stepenovanje//


let sati=15;
let minuti=47;

console.log(sati*60+47);

let cena=588;
let novcanica=2000;

console.log(novcanica-cena);

let dinari=10000;
let evro=128;
let kurs=117.3;
//evro//
console.log(dinari/kurs);
//dinari//
console.log(evro*kurs);




//dolari//

let kdolari=110;
let kevri=117;
evri=500;
dolari=evri*(kevri/kdolari);

console.log(dolari)


//iz celziusa u farenhajte//

let celzius;
celzius=24;
let farenhajt
farenhajt=celzius*1.8 + 32;
celzius=farenhajt/1.8-32
console.log(farenhajt,celzius);


//iz celziusa u kelvine//
//uzima prvu vrednost celziusa gore koja naidje//
celzius=32
let kelvin;
kelvin=celzius+273.15
celzius=kelvin-273.15
console.log(kelvin,celzius)


