//kreiranje objekta blog
let blog = {
  title: "Moj prvi blog",
  content: "Neki text",
  autor: "IDJ"
};

console.log(blog);
console.log(typeof 5);
console.log(typeof "Jelena");
console.log(typeof true);
console.log(typeof blog);
//pristupanje osobini 1. nacin
console.log(blog.title);
// drugi nacin
console.log(blog["title"]);

//izmena neke osobine
// 1.nacin
blog.title = "Moj prvi blog !!!!!";
console.log(blog);
// 2.nacin
blog["title"] = "Moj prvi blog !!!!!!!!!!";
console.log(blog);

let blog1 = {
  title: "Blog 1!",
  content: "Tekst 1",
  likes: 0,
  dislikes: 50
};

let blog2 = {
  title: "blog 2!!",
  content: "Tekst 2",
  likes: 20,
  dislikes: 20
};

let blog3 = {
  title: "blog 3?",
  content: "Tekst 3",
  likes: 5,
  dislikes: 50
};

let user = {
  username: "JohnDoe",
  age: 30,
  blogs: ["Title1", "Title2", "Title3"],
  login: function() {
    console.log("Ulogovani ste");
  },
  logBlogs: function() {
    this.blogs.forEach(b => {
      console.log(b);
    });
    //mora da se stavi this ako zelimo u okviru
    //objekta da pristupamo njegovim
    //propertijima
  }
};
////ispis funkcije login ovoga je u liniji 70 tj.poziv metoda
console.log(user.username);

let arrBlogs = user.blogs;
//Ispis niza blogova
for (let i = 0; i < arrBlogs.length; i++) {
  console.log(`Naslov je:${arrBlogs[i]}`);
}

//ispis niza bloga foreach metodom:
arrBlogs.forEach(blog => {
  console.log(`Naslov je${blog}`);
});

//poziv metoda
user.login();

//poziv unutar metoda
user.logBlogs();

console.log(this);
// niz objekata
let blogs = [blog1, blog2, blog3];

// iteracija for petljom
for (let i = 0; i < blogs.length; i++) {
  //console.log(blogs[i].title);
  //drugi nacin za ispisivanje
  console.log(blogs[i]["title"]);
}

//iteracija foreach nizom objekata-ispisivanje celih objekata
blogs.forEach(blog => {
  console.log(blog);
});

//iteracioja foreach nizom objekata
console.log(blog1.title);
//blog=blog1;
//blog=blog2;
//blog=blog3;
blogs.forEach(blog => {
  console.log(blog.title);
  // isto je i da kazemo
  //console.log(blog['title']);
});

// Napraviti arrow funkciju kojoj se prosleđuje niz
//objekata, a ona vraća ukupan broj lajkova
let ukupnoLajkova = blogs => {
  let ukupno = 0;
  blogs.forEach(elem => {
    ukupno += elem.likes;
  });
  return ukupno;
};
ukupnoLajkova(blogs);
console.log(ukupnoLajkova(blogs));

//Napraviti arrow funkciju kojoj se prosleđuje niz
//objekata, a ona vraća prosečan broj lajkova
let prosecnoLajkova = niz => {
  let ukupno = ukupnoLajkova(niz);
  let broj = niz.length;
  let avg = ukupno / broj;
  return avg;
};

console.log(prosecnoLajkova(blogs));

//Napraviti arrow funkciju kojoj se prosleđuje niz
//objekata, a ona ispisuje sve one naslove blogova koji
//imaju najmanje duplo više pozitivnih nego negativnih
//ocena
let visepozitivnih = niz => {
  niz.forEach(elem => {
    let poz = elem.likes;
    let neg = elem.dislikes;
    if (poz > neg) {
      console.log(elem.title);
    }
  });
};
visepozitivnih(blogs);

/*Napisati arrow funkciju kojoj se prosleđuje niz objekata
a ona ispisuje sve naslove koji se završavaju uzvičnikom
*/
let uzvicnik = blogs => {
  blogs.forEach(blog => {
    let naslov = blog.title;
    if (naslov.endsWith("!")) {
      console.log(naslov);
    }
  });
};
uzvicnik(blogs);
// objekat u objektu slajd
let user1 = {
  username: "JelenaMatejic",
  age: 25,
  blogs: [blog1, blog2, blog3],

  logBlogs: function() {
    this.blogs.forEach(b => {
      console.log(b);
    });
  },
  logTitleBlogs: function() {
    this.blogs.forEach(b => {
      console.log(b.title);
    });
  }
};

console.log(user1);
user1.logBlogs();
user1.logTitleBlogs();

//Napraviti niz korisnika gde svaki od korisnika sadrži niz
//blogova. Svaki blog u ovom nizu je objekat.

let user2 = {
  username: "Pera Peric",
  age: 16,
  blogs: [blog1, blog2]
};
let user3 = {
  username: "Ana Antic",
  age: 29,
  blogs: [blog1, blog3]
};
//niz korisnika
//Napraviti niz korisnika gde svaki od korisnika sadrži niz
//blogova. Svaki blog u ovom nizu je objekat.
let users = [user1, user2, user3];

//Ispisati imena onih autora koji imaju ispod 18 godina
users.forEach(elem => {
  let god = elem.age;
  if (god < 18) {
    console.log(elem.username);
  }
});

let mladjiOd18 = korisnici => {
  korisnici.forEach(elem => {
    let god = elem.age;
    if (god < 18) {
      console.log(elem.username);
    }
  });
};

//Ispisati naslove onih blogova koji imaju više od 50
//lajkova

let popularniBlogovi = korisnici => {
  korisnici.forEach(k => {
    let nizBlogova = k.blogs;
    nizBlogova.forEach(b => {
      let lajkovi = b.likes;
      if (lajkovi > 50) {
        console.log(b.title);
      }
    });
  });
};

popularniBlogovi(users);

//Ispisati sve blogove autora čiji je username ’JelenaMatejic’

let blogoviAutora = (korisnici, ime) => {
  korisnici.forEach(k => {
    //ako je korisnik '...' tek onda ispisati njegove blogove
    if (k.username == ime) {
      let nizBlogova = k.blogs;
      nizBlogova.forEach(b => {
        console.log(b.title);
      });
    }
  });
};

blogoviAutora(users, "JelenaMatejic");

//Ispisati imena onih autora koji imaju ukupno više od 100
//lajkova za blogove koje su napisali

let popularniAutori = autori => {
  autori.forEach(a => {
    let nizBlogova = a.blogs;
    let sumlikes = 0; //pojedinacni korisnici
    nizBlogova.forEach(b => {
      sumlikes += b.likes;
    });
    if (sumlikes > 100) {
      console.log(a.username);
    }
  });
};

popularniAutori(users);
// 2 nacin nisam zavrsio kod
let popularniAutori2 = autori => {
  autori.forEach(a => {
    let nizBlogova = a.blogs;
    // let sumlikes = 0; // za sve korisnike korisnici
    nizBlogova.forEach(b => {
      sumlikes += b.likes;
    });
    if (sumlikes > 100) {
      console.log(a.username);
    }
  });
};

//Ispisati naslove onih blogova koji imaju natprosečan broj
//pozitivnih ocena i ispodprosečan broj negativnih ocena

//prosecno dislike
let superBlog = niz => {
  let sum = 0; //suma svih lajkova svih blogova
  let sumDis = 0;
  let br = 0; // broj svih blogova
  niz.forEach(a => {
    let nizBlogova = a.blogs;
    nizBlogova.forEach(b => {
      br++;
      sum += b.likes;
      sumDis += b.dislikes;
    });
  });

  //prosek lajkova i dislajkova
  let avgLikes = sum / br;
  let avgDislike = sumDis / br;
  //prodjem svim blogovima i ispitam da li imaju vise od prosecno lajkova i manje od prosecno dislajkova
  niz.forEach(a => {
    let nizBlogova = a.blogs;
    nizBlogova.forEach(b => {
      if (avgLikes < b.likes && avgDislike > b.dislikes) {
        console.log(b.title);
      }
    });
  });
};
superBlog(users);
