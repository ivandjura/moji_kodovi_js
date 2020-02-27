
// isipisati brojeve od 1 do 10 pomocu for petlje

/*let i;
for(i=0;i<= 10;i++)
{
    console.log(i);
}
*/


// 2 zadatak ispisati brojeve od 20 do 1
let i; 
/*for(i=20;i >=1;i--){
    console.log(i);
}

*/

// ispisati paren brojeve od 1 do 20

/*
 for(i=2;i<=20;i+=2)
 {
     if(i%2==0){
        console.log(i);
        } 
        console.log(i);
    }
*/

//4 ispisati dvostruku vrednost brojeva od 5 do 15

 /*for(i==5,i<=15,i++1){
    console.log(2*i); //console.log(i+I)
}

*/



//sabirati brojeve od 1 pa na dalje redom , tako da ne predjete unetu sumu s.
/*let s=15;
i=1;
let br=0;
let pom_s=0;
while(pom_s<=s)
{
    pom_s+=i;
    i++;
    br++;
}
console.log(br);
*/

//pomnoziti brojeve od 1 pa na dalje redom , tako da ne predjete uneti proizvod
/*i=1;
let k=50;
let pom_pr=1;
let br=0;

 while(pom_pr<k){
     pom_pr*=i; //pom_p=pom_p*i
     i++;
     br++;
     }
console.log(br);
*/

//Odrediti sumu brojeva od 1 do 100
/*let s=0;
for(i=1;i<=100;i++){
    s+=i;

}
console.log(s)
*/

//Odrediti sumu brojeva od 1 do n
/*let s=0;
let n=50;
for(i=1;i<=n;i++){
    s+=i;

}
console.log(s)
*/ 

//Odrediti sumu brojeva od n do m
/*let s=0;
let n=50;
let m=100;
for(i=n;i<=m;i++){
    s+=i;

}
console.log(s)
*/

//Odrediti proizvod brojeva od n do m



//12 zadatak Odrediti proizvod svih brojeva deljivih sa
// 11 u intervalu od 20 do 100.

/*let p=1;
for(i=20;i<=100;i++){
    if(i%11==0){
        p=p*i; // mnozimo brojeve koji su deljivi sa 11 ne 11, // p*=1;

    }
}
console.log(p);
*/

//12.1 zadatak Odrediti proizvod svih brojeva deljivih sa
// 11 u intervalu od 20 do 100 i ispisati ih.

/*let p=1;
for(i=20;i<=100;i++){
    if(i%11==0){
        p=p*i; // mnozimo brojeve koji su deljivi sa 11 ne 11, // p*=1;
        console.log(i);
    }
}
console.log(p);
*/

// 13 Prebrojati koliko ima brojeva deljivih sa 13
//u intervalu od 5 do 150.
/*
let br=0; //deljivi
let br1=0 // nisu deljivi
for(i=5;i<=150;i++)
{
    if(i%13==0){
        br++;
    }else{
        br1++;
    }
}
console.log(br);
//nisu deljivi sa 13
console.log(`U intervalu od 5 do 150 ima ${br} brojeva koji su
 deljivi sa 13 i ${br1} koji to nisu`)
//2.nacin 
//let br1=150-5-br;
// console.log(br1);

*/


// 14 zadatak Ispisati aritmetičku sredinu brojeva od n do m
//1 nacin
/*
let n=5;
let m=10;
let s=0

for(i=n;i<=m;i++){
    s+=i;
    br++;

}
let arsr=s/br;
console.log(arsr)

let
*/



//15
/*
let n=-7;
let m=13;

let poz=0;
let neg=0;
for (i=n;i<=m;i++){
    if(i>=0){
        poz++;
    }
    else{
        neg++;
    }
}
console.log(`Ima pozitivnih brojeva ${poz}`);
console.log(neg);
*/
//17

/*
let n=10
let m=45
let br=0
let s=0
let cifra;

for(i=n;i<=m;i++){
    cifra=i % 10;
    if(cifra == 4){
        br++; br+=1 //br=br+1
        s=s+i;
    }
}
console.log(s);
console.log(br);
*/

// 21Odrediti proizvod brojeva od n do m koji su
//deljivi brojem a
/*
let n=11;
let m=30;
let a=10;
let p=1;

for(i=n;i<=m;i++){
    if(i%a==0){// dodajem  || && i !=0 da preskocim nulu) 
        p=p*i;
    }

}
console.log(p);

*/

//tri slicice//
 let div=document.getElementById("slika");
 for(i=1;i<=16;i++){
    if(i%3==1)
    {
        div.innerHTML+="<img src=images/1.png>";

    }else if(i%3==2){
        div.innerHTML +="<img src=images/2.png>";
    }
    else{
     div.innerHTML += "<img src=images/3.png>";
    }
 }

 //treci nacin
for(i=0;i<=16;i++){
    let j=i%3+1;
    div.innerHTML+="<img src=images/"+j+ ".png";
}