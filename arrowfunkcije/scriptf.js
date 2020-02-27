//zadataci funcije obicne u folderu
//11 zadatak
function suma(n,m){
   if(n>m){
       return 0;
   }
    let s=0
    for(let i=n;i<=m;i++){
        s+=i;
    }
    return s;
    
}
console.log(suma(7,2));
let p= suma(6,12);
console.log(p);
p=suma(1,9);
console.log(p);
console.log(suma(5,18)); // funkcija u funciji prvo zagrade pa se onda ispisuje sa console .log

// zadatak br.12
function mnozi(n,m){
    let p=1;
    for(let i=n;i<=m;i++){
        p*=i;  //p=p*i
        //return p; // ako je unutra ne sme unutra samo ce da ispise 3 jer return zaustavlja iterator
    }
    return p;
}
console.log(mnozi(3,6));

//zadatak 13
function arsr(n,m){
    let zbir=0;
    let broj=0;
    for(let i=n;i<=m;i++){
        zbir=zbir+i; //zbir+=i;
        broj=broj+1; //broj++; ili broj+=1;
    }
    return zbir/broj;
}

console.log(arsr(5,88));

//14
    function arsr3(n,m){
        let zbir=0;
        let broj=0;
        for(let i=n;i<=m;i++){
            if(i%10==3){
                zbir+=i;
                broj++;

            }
        }
        if(broj>0){
            return zbir/broj; 
        }
        return 0;
        
        //k/n=>infinity
        //0/0 =>NaN

    }

    console.log(arsr3(1, 10));
    console.log(arsr3(6, 9));

    function deljivSaTrI(n,m){
        let broj=0;
        for(let i=n;i<=m;i++){
            if(i%3==0){
                //console.log(i);
                broj++;
            }
        }
        return broj;
    }   
console.log("broj brojeva deljivih sa tri je:"+deljivSaTrI(5,14));
let rez=deljivSaTrI(5,14);
console.log(`Broj brojeva deljivih sa tri je:${rez}`)
console.log(`Broj brojeva deljivih sa tri je:${deljivSaTrI(5,14)}`)
a=5;
b=14;
console.log(`Broj brojeva deljivih sa tri je:${deljivSaTrI(a,b)}`);


//zadatak broj 5

function slika (putanja){
 //   return "<img src='"+ putanja +"' + '>"
 return `<img src='${putanja}' alt='blabla'>`;
}
let elem=document.getElementById('blabla');
elem.innerHTML=slika('lego.png');
console.log(elem.innerHTML);
elem.innerHTML+=slika('lego2.jpg');

//zadatak broj 6

function paragraf(boja){
    return `<p style='Color:${boja}'>Tekst tekst...</p>`
}
elem.innerHTML+=paragraf('red');
elem.innerHTML+=paragraf('blue');
// varijanta 6 zadatak i boja i tekst
function paragraf2(boja,tekst){
    return `<p style='color: ${boja}'>${tekst}</p>`;
}
elem.innerHTML+= paragraf2('green','Lorem ispum...');
elem.innerHTML+= paragraf2('yellow','Pera Peric');

//7
function paragraf3(velicina,tekst){
    return `<p style='font-size: ${velicina}px'>${tekst}</p>` //mora bez razmaka jer u css ide px bez razmaka 24px
}

elem.innerHTML+=paragraf3(24,"Neki tekst");
elem.innerHTML+=paragraf3(46,"Neki drugi tekst");

//8.
function pisiPetParagrafa(){
    let res="";
    for(let i=1;i<=5;i++){
        let j=i*10;
        res=res+`<p style='font-size:${j}px'>Neki tekst</p>`;
    }
    return res;
}
elem.innerHTML +=pisiPetParagrafa();