// ispitati brojeve od 1 do 20 ,svaki u novome redu
/*

let i=1;
while(i<=20){
    console.log(i)
    i++;
    //ili i+1 ,ili i=i+1//

}

console.log("svete!")
*/

//2 zadatak ispisative broje od 1 do 20 sve u istom redu

/*let i=1;
let rez="";
while(i<=20){
    rez=rez+ i + " " //rez+= i + " "
    i++;
    //ili i+1 ,ili i=i+1//
    
}
console.log(rez);


//3 zadatak ispisati broje od dva do 1
let j=20
while(j>=1){
    console.log(j);
    j--; //ili j-=1; //ili j=j-1
}
*/

//4 ispisati parne broje od 20 do 1

/*let j=20
while(j>=2){
    console.log(j);
    j-=2; //ili j=j-2

} */
//4.1 ispisati brojeve od 1 do 20 koji su deljivi sa 3

/*let i=1;
while(i<=20)
{
    if(i%3==0 && i%9 !=0)
    {
        console.log(i)  
    }
    i++;
}
*/
// odrediti sumu brojeva od 1 do 100
/*let i=1;
let s=0; // neutral za sabiranje

while(i<=100)
{
    s+=i;
    i++;
}
console.log(s);
/*s=0;i=1;
s=1;i=2;
s=3;i=3;
s=6;i=4;
s=10;i=5;
*/

// 6.1 
/*
let s=0;
let i=2;
while(i<=100){
    if(i%2==0){
        s+=i // s=s+i;
    }
    i++; // ide izvan if da bi se povecavao svaki put i+=1 //i=i+1;
}
console.log(s)
 

// 7. zadatak */

/*let i=1;
let n=10;
let s=0
while(i<=n){
    s+=i;
    i+=1; // moze i++. i=i+1;
}
console.log(s);

console.log(n*(n+1)/2); // suma brojeva u jednoj liniji
*/

// 8 odrediti sumu brojeva od n do m
/*
let n=5
let m=10
let s=0
let i=n;


while(i <=m){
    s+=i //s=s+n
    i++; //n=n+1
}
console.log("suma brojeva od "+ n +" do "+ m + "je" +s+)
console.log(`Suma brojeva od ${n} do ${m} je ${s}`)
*/
// 9. odrediti  proizvod brojeva od n do m
/*
let n=1;
let m=5;
let i=n;
let p=1; //neutral za mnozenje
while(i<=m){
    p*=i; //p=p*i
    i++; //i+=1 //i=i+1;
}
console.log(p);
*/
//9.1 odrediti proizvod svakod drugog broja od n do m
/*
let n=1;
let m=5;
let i=n;
let p=1; //neutral za mnozenje
while(i<=m){
    p*=i; //p=p*i
    i=i+=2; // i+=2
}
console.log(p);
*/

// 10 deseti zadatak odrediti sumu kvadrata brojeva od n do m
/*
let n=1;
let m=5;
let i=n;
let s=0;
while(i<=m){
    s=s+i**2 //s=s+i*i //s+=i*i //s+=i**;
    i++;
}
console.log(s);
/*
S=0 i

*/

//11 Odrediti sa koliko brojeva je deljiv uneti broj k
let k=15;
let i=1;
let br=0;

while(i<=k){
    if(k%i==0){
        br++; // br+=1 // br=br+1;
    }
    i++; //i+=1 //i=i+1;
}
/*15/1= true    
15/2 =false 
15/3 =true 
15/4 =false
15/5
15/15
*/