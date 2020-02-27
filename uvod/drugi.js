// dohvatamo trenutno vreme//
//1)kreiramo objekat date//
let datum= new Date();

 let sati= datum.getHours(); //trenutno sati
 let minuti= datum.getMinutes(); /*trenutno minuta ovde na 
oba nema let zato sto vuce iz vrednosti let sate i minute koji postoje i prvi.js*/

console.log(sati, minuti);

let minutaOdPonoci=sati* 60 + minuti;

console.log(minutaOdPonoci);
 let a=3;
 let b=5;

 console.log(a+b);
 a="3";
 b="5";
 console.log(a+b);


 a=3;
 b="5"; //u js kada se sabira broj i string dobija se po defaultu string//
 console.log(a+b);

 let c;
 a="5";
 b=3;
 c=9;

console.log(a+b+c);   //dobija se string od tri karaktera      S+N+N// 
console.log(b+c+a);  // saberu se dva broja pa se opet dobija string string ima prioritet //

console.log("Prvi broj je: ", + b + " a drugi je: " + c);

//template string- backticks (``- tilda kod mene)
//obican string - "" ili' '
console.log(`Prvi broj je: ${b}, a drugi je: ${c}`);
console.log('Prvi broj je: ${b}, a drugi je: ${c}');
console.log(5/"hello");




