let ulZdataci = document.querySelector("ul");
let liZadatci = document.querySelectorAll("li");

liZadatci.forEach(elem => {
  elem.addEventListener("dblclick", () => {
    if (elem.style.textDecoration == "line-through") {
      elem.style.textDecoration = "none";
      elem.style.opacity='1'
    } else {
      elem.style.textDecoration = "line-through";
      elem.style.opacity='0.7'
    }
  });
});
