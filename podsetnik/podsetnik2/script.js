let ulZdataci = document.querySelector("ul");
let liZadatci = document.querySelectorAll("li");

liZadatci.forEach(elem => {
  elem.addEventListener("click", e => {
    // console.log(e.target);
    if (e.target.style.textDecoration == "line-through") {
      e.target.style.textDecoration = "none";
    } else e.target.style.textDecoration = "line-through";
  });
});
