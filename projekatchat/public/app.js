import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

//dom elementi
let chatList = document.querySelector("#ulMessages");

let formMessage = document.querySelector("#formMessage");
let inputMessage = document.querySelector("#inputMessage");

let formUsername = document.querySelector("#formUsername");
let inputUsername = document.querySelector("#inputUsername");

let rooms = document.querySelector("nav");
let updatedUsername = document.querySelector("#divUpdatedUsername");

let buttons = document.querySelectorAll("button");

//provera username u lokalnoj memoriji
let checkUsername = () => {
  if (localStorage.usernameLS) {
    return localStorage.usernameLS;
  } else {
    return "anonymous";
  }
};

//kreiranje klase instanca
let chatroom = new Chatroom("js", checkUsername());
let chatui = new ChatUI(chatList);

//provera prilikom ucitavanja stranice
//koja soba je bila poslednja posecenja ,nju ucitati

let checkRoom = () => {
  if (localStorage.roomLS) {
    return localStorage.roomLS;
  } else {
    return "general";
  }
};
chatroom.updateRoom(checkRoom());

//poslednjoj posecenoj sobi dodati klasu koje ce da oboji to dugme
buttons.forEach(b => {
  if (b.id == checkRoom()) {
    b.classList.add("btn-selected");
  }
});

//ispisi poruke
chatroom.getChets(data => {
  console.log(data); //u konzoli
  chatui.templateLI(data);
});

//kada je kliknuto(submit) na dugme send posalji poruku
formMessage.addEventListener("submit", e => {
  e.preventDefault();
  let message = inputMessage.value;
  chatroom
    .addChat(message)
    .then(() => formMessage.reset())
    .catch(error => console.log(error));
});

//kada je submit dugme update izmeni korisnicko ime
formUsername.addEventListener("submit", e => {
  e.preventDefault();
  let newUsername = inputUsername.value;
  chatroom.updateUsername(newUsername);
  formUsername.reset();

  //osveziti stranicu osveziti chet prilikom promene korisnickog imena tako sto ga izbrisemo i upisemo ponovo
  chatui.clear();
  chatroom.getChets(data => {
    chatui.templateLI(data);
  });

  //kada je update ime prikazati poruku u trajanju od 3s
  updatedUsername.innerHTML = `Your username was updated to <span id="spanNewUsername">${newUsername}
  </span>`;
  setTimeout(() => {
    updatedUsername.innerHTML = ``;
  }, 3000);
});
//promena sobe
rooms.addEventListener("click", e => {
  if (e.target.tagName == "BUTTON") {
    //kada je kliknuto na dugme dodeliti mu klasu da je bas ono selektovano

    buttons.forEach(b => {
      //1."ocistiti" dugme od btn-selected klase
      if (b.classList.contains("btn-selected")) {
        b.classList.remove("btn-selected");
      }
    });
    let btnId = e.target.getAttribute("id");
    let btn = document.getElementById(btnId);

    btn.classList.add("btn-selected");

    //zelimo da isbrisemo sve poruke sa stranice
    chatui.clear();

    // zelimo da promenimo sobu
    let newRoom = e.target.getAttribute("id");
    chatroom.updateRoom(newRoom);
    localStorage.setItem("roomLS", newRoom);

    //zelimo da ucitamo poruke za promenjenu sobu
    chatroom.getChets(data => {
      console.log(data);
      chatui.templateLI(data);
    });
  }
});
