//modul awnsers.js
let tacniOdgovori = ["B", "A", "B", "B"];
let calculateScore=odgovori=>{
    let score = 0;
    odgovori.forEach((odgovori, index) => {
      if (odgovori == tacniOdgovori[index]) {
        score += 20;
      }
    });
    return score;
};