// Modul film.js

export default class Film {
    constructor(n, r, g) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = g;
    }
    stampaj() {
        console.log(`Film '${this.naslov}' rezirao ${this.reziser}, ${this.godinaIzdanja}. godine`);
    }
<<<<<<< HEAD
}
=======
    set fNaslov(n){
        return this.naslov
    }
    get fNaslov(){
        this.naslov=n
    }
    set fReziser(r){
        return this.resiser

    }
    get fReziser(){
        this.resiser= r
    }
    set fGodinaizdanja(g){
        if(g> 1800){
            this.godinaIzdanja=g
        }
        else{
            this.godinaIzdanja=1800
        }
    }
    
}

  
>>>>>>> a085ac5f83e4cd15dafd4531d6c11fa63f9b0279
