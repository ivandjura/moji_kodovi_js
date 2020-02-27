let suma=function(a,b){
    let s= a+b;
    return s;
}
console.log(suma(1,4));
console.log(suma(9,4));

let sum2=(a,b)=>{
    return a + b;
}


console.log(suma(1,4));
console.log (suma(9,4));
console.log (sum2(4,5));


// primeri
let hello=()=>{
    console.log("Hello world");
}
hello();
hello();
let echo=(s1,s2)=>{
    let s=s1 +", " + s2;
    console.log(s);
}
echo("Pera", "Peric");
echo("Laza", "Lazic");

// zadatak 3 vezbanja za obicne funckije

let neparan=(n)=>{
    if(n%2 !=0){
    return true;
    } 
    else return false;

}   
console.log(neparan(9));

let max2=(n,m)=>
    {
    if(n>m){
    return n;
    }
    else{
    return m;    
    }
}

console.log(max2(8,16))


let max4=(n,m,a,b)=>{
    let mak1=max2(n,m);
    let mak2=max2(a,b);
    let mak3=max2(mak1,mak2);
    return mak3;
}

console.log(max4(5,-1,2,14));

let deljivSaTri=(n,m)=>{
     let br=0;
for( let i=n;i<=m;i++){
    if(i%3==0){
        br++;
    }
   
    }
    return br;
}
console.log(deljivSaTri(3,21));


//zadatak 5 sa obicnom i arrow

function slika(putanja) {
    return `<img src='${putanja} alt='blabla'>`;

}

//1)Telo arrow funcije se sastoji 
//samo od return naredbe


//2. arrow funcija prima samo jedan parametar
let slika4 = (putanja) =>`<img src='${putanja} alt='blabla'>`;

let div=document.getElementById("blabla");
div.innerHTML=slika4("images/vangog.jpg");
div.innerHTML=slika4('images/pasta.jpg');


let sledbenik=n=>n+1;
console.log(sledbenik())
