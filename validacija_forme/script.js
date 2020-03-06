let forma = document.querySelector("#login-form");
let inputUsername = document.querySelector("#username");
let btnSubmit = document.querySelector("#submit");
let divGreska = document.querySelector("#greska");
let patternUsername = /^[a-zA-Z0-9]{5,15}$/;


inputUsername.addEventListener("keyup", e => {// moze i preko inputUsername ili preko forme forma.username(form.id ili form.name)
  if (patternUsername.test(inputUsername.value)) {
    inputUsername.setAttribute("class", "success");
  } else {
    inputUsername.setAttribute("class", "error");
  }
});

forma.addEventListener("submit", e => {
  //event e moze i bez zagrada
  e.preventDefault();
  // let patternUsername= /zdravo/i; // dali sadrzi rec zdravo
  let patternUsername = /^[a-zA-Z0-9]{5,15}$/;
  let username = inputUsername.value;

  if (patternUsername.test(username)) {
    divGreska.textContent = `Podatci ispravno uneti,Vas uzername je ${username} .`;
  } else {
    divGreska.textContent =
      "Username sme sadrzati samo slova ili brojeve i biti izmedju 5 i 15 karaktera";
  }

  // console.log(username)
});
