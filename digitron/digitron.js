let btn = document.querySelectorAll("broj");
let x = 0;
let y = 0;
let op = "";
let rez = 0;
let btnOperacije = document.querySelectorAll("operacije");

btn.forEach(elem => {
  elem.addEventListener("click", () => {
    if (x == 0) {
      x = elem.textContent;
      console.log(x);
    } else {
      y = elem.textContent;
      console.log(y);
    }
  });
  console.log(x, y);
});

btnOperacije.forEach(elem => {
  elem.addEventListener("click", () => {
    op.elem.textContent;
  });
});

//za sabiranje

let jednako = document.getElementById("jednako");
jednako.addEventListener("click", () => {
  x = parseInt(x);
  y = parseInt(y);
  switch (op) {
    case "+":
      rez = x + y;
      break;
    case "-":
      rez = x - y;
      break;
    case "/":
      rez = x / y;
      break;
  }
  let paragraf = document.getElementById("rezultat");
  x=0;
  y=0;
  rez=0;
  paragraf.innerText = rez;
});
