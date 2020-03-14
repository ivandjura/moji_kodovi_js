import { Vozilo } from "./vozilo.js";

 export class Kamion extends Vozilo{
    constructor(t,b,n){ //tip boja i nosivost
        super(t,b);
        this.nosivost=n;
    }
    set nosivost(n){
        this._nosivost=n;
    }
    get nosivost(){
        return this._nosivost;
    }
    ispisiKamion(){
        console.log(`Kamion:${this.tip} ${this._boja} ${this.nosivost}`)
    }

}