let a = 5;
let b = 8;
if (a > b)
{
    console.log(`${a} je vece od ${b}`)
}
console.log("komanda posle if");

a = 6;
b = '6';
if(a==b){
    console.log(`${a} je jednako ${b}`);
}

if(a===b){
    console.log(
        `${a} je jenako ${b} po t. i v.`)
}
if(a!=b){
    console.log(
        `${a} nije jedanko ${b}`)
}
if(a!==b){
    console.log(
        `${a} nije jedanko ${b} po t. i v.`)
}

a=5
b=12

if(a>b){
    console.log(`${a} je vece od ${b}`);
}
else{
    console.log(`${a} nije vece od ${b}`);
}



if(a==b){
    console.log(`${a} je jednako ${b}`);
}
else{
    console.log(
        `${a} nije jedanko ${b}`);
    }
if(a===b){
    console.log(
        `${a} je jenako ${b} po t. i v.`);
}
else{
    console.log(
`${a} nije jedanko ${b} po t. i v.`);
}



let t=20

if(t>=0){
    console.log(`${t} temepratura je u plusu`)
}
else{
    console.log(`${t} temperatura je u minusu`)
};
let pol="z"
let muski="m"
let zenski="z"
let div=document.getElementById('blabla');
    if(pol=="m"){
        console.log("pol je muski")
        div.innerHTML="<img src='2.jpg' alt='muski'>";
    }
    else{
        console.log("pol je zenski")
        div.innerHTML="<img src='3.jpg' alt='zenski'>";
    };

let datum=new Date();
let sati= datum.getHours();
console.log(sati);
if(sati<12){
    console.log("Prepodne")
}
else{
    console.log("poslepodne")
}

let trenGodina=datum.getFullYear();
let godiste=1984
if(trenGodina-godiste>=18){
    console.log("osobba je punoletna")
}
else{
    console.log("osoba je maloletna")
}


let x=9
let y=-3
let z=15
let max=x;
if(y>max){
    max=y;
}
if(z>max){
    max=z;
}
console.log(max);


















