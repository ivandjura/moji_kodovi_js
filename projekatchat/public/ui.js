export class ChatUI {
  //konstruktor
  constructor(l) {
    this.list = l;
  }

  //geter i seter
  set list(l) {
    this._list = l;
  }

  get list() {
    return this._list;
  }
  //izmena datuma
  formatDate(date) {
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    let h = date.getHours();
    let min = date.getMinutes();

    let danasnji = new Date();
    let danasnjiDan = danasnji.getDate();
    let danasnjiMesec = danasnji.getMonth() + 1;
    let tekGodina = danasnji.getFullYear();

    danasnjiDan = String(danasnjiDan).padStart(2, "0");
    danasnjiMesec = String(danasnjiMesec).padStart(2, "0");

    //Dodavanje nule ispred jednocifrenih vrednosti
    d = String(d).padStart(2, "0");
    m = String(m).padStart(2, "0");
    h = String(h).padStart(2, "0");
    min = String(min).padStart(2, "0");

    if (d == danasnjiDan && m == danasnjiMesec && y == tekGodina) {
      let strDate = h + ":" + min;
      return strDate;
    } else {
      let strDate = d + "." + m + "." + y + ". - " + h + ":" + min;
      //probaj na jelenin kod
      return strDate;
    }
  }

  //Metod koji pravi osnovu za prikaz list item-a
  //data koji prosleđujemo je objekat tj. dokument iz baze
  templateLI(data) {
    let date = data.created_at.toDate();
    let strDate = this.formatDate(date);

    let htmlLI = `<li `;
    if (data.username == localStorage.usernameLS) {
      htmlLI += `class="me">`;
    } else {
      htmlLI += `class="not-me">`;
    }

    htmlLI += `   <span class="username">${data.username} : </span>
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
