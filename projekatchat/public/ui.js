export class ChatUI {
  //konstruktor
  constructor(l) {
    this.list = l;
  }
  set list(l) {
    this._list = l;
  }
  get list() {
    return this._list;
  }

  formatDate(date) {
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    let h = date.getHours();
    let min = date.getMinutes();

    //dodavanje 0 ispred jednocifrenih vrednosti
    d = String(d).padStart(2, "0");
    m = String(m).padStart(2, "0");
    h = String(h).padStart(2, "0");
    min = String(h).padStart(2, "0");

    let strDate = d + "." + m + "." + "." + y + ". -" + h + ":" + min;

    return strDate;
  }

  //metod koji pravi osnovu za prikaz list itema
  //data koji prosledjujem je objekat tj. dokument iz baze
  templateLI(data) {
    let date = data.created_at.toDate();
    let strDate = this.formatDate(date);

    let htmlLI = `<li `;
    if (data.username == localStorage.usernameLs) {
      htmlLI += `class="me">`;
    } else {
      htmlLI += `class="not-me"`;
    }

    htmlLI += `<li>
        <span class="username">${data.username} : </span>
        <span class="message">${data.message}</span>
        <div class="date">${strDate}</div> 
    </li>`;
    this.list.innerHTML += htmlLI;
    this.list.scrollTop = this.list.scrollHeight;
  }

  clear() {
    this.list.innerHTML = ``;
  }
}
