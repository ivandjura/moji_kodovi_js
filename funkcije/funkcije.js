function zdravoSvete(){
    console.log("Zdravo svete!!!");
}
/*
zdravoSvete();
console.log("****");
zdravoSvete();
for(let i=1;i<=10;i++){
    zdravoSvete()
}
*/
/*Funkcija sa prosledjenim jednim parametrom */
function ispisi(tekst){
    console.log(tekst);
}
ispisi("blablabla");
ispisi("JavaScript");
let ime="Ana";
ispisi(ime);
ispisi(17.3);
let tekst="Neki tekst"
ispisi(tekst);


/*funkcija kojoj 
prosledjujemo vise parametara
*/
function ispiskorisnika(ime,prezime,godRodj){
    console.log(`Korisnik je ${ime} ${prezime} rodjen ${godRodj}`);
}

ispiskorisnika("Jelena","Matejic",1994);
let korisnikIme="Mika";
let korisnikPrezime="Mikic";
let korisnikGodRodj=1992;
ispiskorisnika(korisnikIme,korisnikPrezime,korisnikGodRodj);

/* ispis zbira dva broja */
function zbir(x,y){
    let z=x+y;
    console.log(z); //naravno da ste mogli da napisete i consol.log(x+y)
}
zbir(2,3);
zbir("2","5");
zbir(6,"6");

/*Digitron */
function digitron(a,b,o){
    let rez;
    if(o=="+"){
        rez=a+b;
    }else if(o=="-"){
        rez=a-b
    }else if(o=="*")
    rez=a*b;
    else{
        if(b==0){
            rez="Nije dozvoljeno deliti nulom";
        }else{
            rez=a/b;
        }
    }
    console.log(rez)
}
digitron(5,3,"+");
digitron(5,3,"-");
digitron(5,3,"*");
digitron(5,3,"/");
digitron(5,0,"/");
digitron(5,2,"aaa");

//return funkcije
function saberi(a,b){
    let c=a+b;
    return c;
}
zbir=saberi(1,5);
console.log(zbir);
let pom=zbir+1;
console.log(pom);

let zbir1=saberi(3,4);
let zbir2=saberi(2,7);
let zbir3=zbir1+zbir2;
console.log(`${zbir1}+${zbir2}=${zbir3}`);

//2. nacin
zbir3=saberi(zbir1,zbir2);
console.log(`${zbir1}+${zbir2}=${zbir3}`);


//zadataci za vezbanje funcija


4. //Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim
//napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function maks2(a,b){
    if (a>b){
        return a;
    }else{
        return b;
    }
}


function maks4(a,b,c,d){
    let mak1=maks2(a,b);
    let mak2=maks2(c,d);
    let mak3=maks2(mak1,mak2);
    return mak3;

}
let m=maks2(2,5);
console.log(m);
m=maks4(5,3,7,4);
console.log(m);

//3 Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je
//neparan ili netačno ukoliko nije neparan.

function neparan(n){
    if(n%2 !=0){
        return true;
    }else{
        return false;
    }
}
let parNepar=neparan(12);
console.log(parNepar);
if(parNepar==true){
    console.log("Broj je neparan");
}else{
    console.log("Broj je paran");
}


/*Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-
ti dan u nedjelji (npr. za 1 se ispisuje „Ponedjeljak“, za 7 ispisuje “Nedelja”, a
za 8 opet “Ponedeljak”).
Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
*/
function sedmiDan(dan) {
    let pomDan=dan/7;
    switch(pomDan){
        case 0:
            return "Nedelja";
            break;
        case 1:
            return "Ponedeljak";
            break;
        case 2:
            return "Utorak";
            break;
        case 3:
            return"Sreda"
            break;
        case 4:
            return"Cetvrtak"
            break;
        case 5:
            return "Petak"
            break;
        case 6:
            return " Subota"
            break;
        default:
            return "Los Unos";
    }
}
let dan=sedmiDan(9)
console.log(dan);