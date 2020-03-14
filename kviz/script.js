let form = document.querySelector("form");
let tacniOdgovori = ["B", "A", "B", "B", "B"];

let div = document.createElement("div");
div.classList.add("intro");
let text = document.createElement("div");
text.classList.add("text");
let h2 = document.createElement("h2");
text.appendChild(h2);
div.appendChild(text);

let whereChild = document.body.children[1];
//console.log(whereChild) provera
document.body.insertBefore(div, whereChild);
div.style.display = "none";


form.addEventListener("submit", event => {
  event.preventDefault(); //ovo vazi samo za forme //1) u js kodu objekat forme(promenljiva form) //2) svi elementi forme u html-u moraju da imaju name atribut
  //potrebno je odredit ko je radi je selektovan
  /*
  let radios = document.querySelectorAll(".q1");
  radios.forEach(radio => {
      if(radio.checked){
          console.log(radio.value);
      }
  });
  */ 
  let odg1 =form.q1.value; //sa desne strane mi je vrednost-value chekiranog radio buttona
  let odg2 = form.q2.value;
  let odg3 = form.q3.value;
  let odg4 = form.q4.value;
  let odg5 = form.q5.value;
  let odg6 = form.q6.value;
  console.log(odg1, odg2, odg3, odg4);
  let odgovori = [odg1, odg2, odg3, odg4, odg5];
  let score = 0;
  odgovori.forEach((odgovori, index) => {
    if (odgovori == tacniOdgovori[index]) {
      score += 20;
    }
  });
  if(odg6.lenght>6){
      score+=16.6// 1/6
  }
  console.log(score);
  div.style.display = "block";
  scrollTo(0, 0);
  //h2.textContent=`Vas odgovor je ${score}%`
  let broj = 0;
  let clock = setInterval(() => {
    h2.textContent = `Vas odgovor je ${broj}%`;
    if (broj < score) {
      broj++;
    } else {
      clearInterval(clock);
    }
  }, 20);
});
