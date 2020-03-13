export class Knjiga{

    //polja
    //naslov, autor, godIzdanja, brojStrana i cena

    //konstruktor
    constructor(n, a, gi, bs, c){
        this.naslov = n;
        this.autor = a;
        this.godIzdanja = gi;
        this.brojStrana = bs;
        this.cena = c;
    }

    //seteri
    set naslov(n){
        this._naslov = n;
    }

    set autor(a){
        this._autor = a;
    }

    set godIzdanja(gi){
        this._godIzdanja = gi;
    }

    set brojStrana(bs){
        if(bs<0){
            this._brojStrana = 0;
        } else {
            this._brojStrana = bs;
        }
    }

    set cena(c){
        if(c < 0){
            this._cena = 0;
        } else {
            this._cena = c;
        }
    }

    //geteri
    get naslov(){
        return this._naslov;
    }

    get autor(){
        return this._autor;
    }

    get godIzdanja(){
        return this._godIzdanja;
    }

    get brojStrana(){
        return this._brojStrana;
    }

    get cena(){
        return this._cena;
    }

    stampaj(){
        console.log(`Knjiga: ${this.naslov} ${this.autor} ${this.godIzdanja} ${this.brojStrana} ${this.cena}`);
    }

    /*Metodu obimna koja vraća true ukoliko je knjiga obimna (broj strana veći od 600), u suprotnom vraća false*/
    obimna(){
        if(this.brojStrana > 600){
            return true;
        } else {
            return false;
        }
    }

    /*Metodu skupa koja vraća true ukoliko je knjiga skupa (knjiga je skupa, ukoliko je njena cena veća od 8000),  u suprotnom vraća false.
    */
   skupa(){
       if(this.cena > 8000){
           return true;
       } else {
           return false;
       }
   }

   /*Metodu dugackoIme koja ispituje da li je ime autora dugačko (ukoliko je broj karaktera u autorovom imenu veći od 18), vraća true/false*/
   dugackoIme(){
       if(this.autor.length > 18){
           console.log("Dugačko ime");
       } else {
           console.log("Nije dugačko ime");
       }
   }

}