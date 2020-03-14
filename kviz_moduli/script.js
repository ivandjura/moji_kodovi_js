import createDiv from "./modules/result_div.js"
import {tacniOdgovori,calcualteScore} from "./modules/answers.js"
import generateScore from "./modules/clock.js";
let form = document.querySelector("form");


[div,h2]=createDiv('intro',document.body,document.body.children[1])


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
  console.log(odg1, odg2, odg3, odg4);
  let odgovori = [odg1, odg2, odg3, odg4, odg5];
  let score=calcualteScore(odgovori)
  div.style.display = "block";
  scrollTo(0, 0);
  //h2.textContent=`Vas odgovor je ${score}%`
  generateScore(h2,score)
});
