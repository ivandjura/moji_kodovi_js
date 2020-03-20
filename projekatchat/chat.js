class Chatroom {
  constructor(r, u) {
    this.username = u;
    this.room = r;
    this.chats = db.collection("chats");
    this.unsub;
  }
  //seteri
  set username(u) {
    this._username = u;
  }
  set room(r) {
    this._room = r;
  }
  //geteri
  get username() {
    return this._username;
  }
  get room() {
    return this._room;
  }

  async addChat(mess) {
    //dohvatanje tekuceg datuma koje je potreban za timestamp
    let date = new Date();

    //kreiranje objekta/dokumenta koji prosledjujemo bazi podataka
    let docChat = {
      message: mess,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(date)
    };
    // da sacuvamo dokument u bazi
    let repsonse = await this.chats.add(docChat);
    return repsonse;
  }

  getChets(callback) {
    this.unsub = this.chats
      .where("room", "==", this.room)
      .orderBy("created_at")
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          //Ako je poruka dodata u bazu onda raditi update
          if (change.type === "added") {
            //uradi update
            callback(change.doc.data());
          }
        });
      });
  }
  updateUsername(uu) {
    //sustinski menja samo vrednost lokalne promenljive, ne menja vrednost username u bazi podataka
    this.username = uu;
  }
  updateRoom(ur) {
    this.room = ur;
    console.log("Updated room");
    if (this.unsub) {
      this.unsub();
    }
  }
}

//nova instanca klase (novi objekat)
let chatroom = new Chatroom("js", "PeraPeric");
//console.log(chatroom);
/*
chatroom
  .addChat("Zdravo!")
  .then(() => {
    console.log("Cet je dodat!");
  })
  .catch(err => {
    console.log(err);
  });
*/
/*
chatroom.updateRoom("general");
/*
chatroom.getChets(data => {
  console.log(data);
});


chatroom.updateRoom("js");
chatroom.getChets(data => console.log(data));
*/
setTimeout(() => {
  chatroom.updateRoom("general");
  chatroom.updateUsername("Tina");
  chatroom.getChets(data => {
    console.log(data);
  });
  chatroom.addChat("Kako si Milice?");
}, 3000);
