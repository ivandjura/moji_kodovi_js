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
  //kada je update ime prikazati poruku u trajanju od 3s
  updatedUsername.innerHTML = `Your username was updated to ${newUsername}`;
  setTimeout(() => {
    updatedUsername.innerHTML = ``;
  }, 3000);
});
//promena sobe
rooms.addEventListener("click", e => {
  if (e.target.tagName == "BUTTON") {
    //zelimo da isbrisemo sve poruke sa stranice
    chatui.clear();

    // zelimo da promenimo sobu
    let newRoom = e.target.getAttribute("id");
    chatroom.updateRoom(newRoom);
    //zelimo da ucitamo poruke za promenjenu sobu
    chatroom.getChets(data => {
      console.log(data);
      chatui.templateLI(data);
    });
  }
});
