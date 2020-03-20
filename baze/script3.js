/*
db.collection('customers')
.where('salary', '<', 900)
.where('age', '==', 30)
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, " => ", polja);
    });
})
.catch(error => {
    console.error("error getting documents");
});








  /*
  .catch(error => {
      console.error('error getting documents', error)
  });
  */
//Iz kolekcije customers, pročitati sve klijente koji:
//Imaju adresu u Nišu,
/*
 db.collection("customers")
 .where('addresses','array-contains','Nis')
 .get()
 .then(snapshot => {
   snapshot.doc.forEach(doc => {
     let polja = doc.data();
     let id = doc.id;
     console.log(id, "=>", polja);
   });
 });






 //Imaju platu veću ili jednaku od 500,
 db.collection("customers")
 .where('salary','>=',500)
 .get()
 .then(snapshot => {
   snapshot.doc.forEach(doc => {
     let polja = doc.data();
     let id = doc.id;
     console.log(id, "=>", polja);
   });
 });
 */
/*
//Imaju platu između 300 i 800,
db.collection("customers")
  .where("salary", ">=", 300)
  .where("salary", "<=", 800)
  .get()
  .then(snapshot => {
    snapshot.doc.forEach(doc => {
      let polja = doc.data();
      let id = doc.id;
      console.log(id, "=>", polja);
    });
  });

//Imaju platu između 300 i 800, a stariji su od 30
db.collection("customers")
  .where("salary", "<", 900)
  .where("age", "==", 30)
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      let polja = doc.data();
      let id = doc.id;
      console.log(id, " => ", polja);
    });
  })
  .catch(error => {
    console.error("error getting documents", error);
  });
*/
//Imaju adresu u Nišu ili Beogradu.
/*
db.collection("customers")
  .where("adresses", "array-contains-any", ["Nis", "Beograd"])
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      let polja = doc.data();
      let id = doc.id;
      console.log(id, " => ", polja);
    });
  })
  .catch(error => {
    console.error("error getting documents", error);
  });
*/

/*Iz kolekcije tasks, pročitati sve zadatke, i koji:
Su prioritetni,
Treba da se izvrše u tekućoj godini,
Su završeni,
Tek treba da počnu.
*/
/*
db.collection("customers")
  .where('priority','==',true)
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      let polja = doc.data();
      let id = doc.id;
      console.log(id, " => ", polja);
    });
  })
  .catch(error => {
    console.error("error getting documents", error);
  });
  */
//Treba da se izvrše u tekućoj godini,
//poredjenje kad je polje string
/*
  let datum1="2020-01-01"
  let datum2="2020-12-31"
  db.collection("customers")
  .where('start_date','>=',datum1)
  .where('start_date','<=',datum2)
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      let polja = doc.data();
      let id = doc.id;
      console.log(id, " => ", polja);
    });
  })
  .catch(error => {
    console.error("error getting documents", error);
  });
  */
/*
 let d1=new Date(datum1);
 let d2=new Date(datum2);
 db.collection("customers")
 .where('start_date','>=',firebase.firestore.Timestamp.fromDate(d1))
 .where('start_date','<=',firebase.firestore.Timestamp.fromDate(d2))
 .get()
 .then(snapshot => {
   snapshot.docs.forEach(doc => {
     let polja = doc.data();
     let id = doc.id;
     console.log(id, " => ", polja);
   });
 })
 .catch(error => {
   console.error("error getting documents", error);
 });
 */
/*
db.collection("customers")
.where('due_date','<=',"2020-03-19")
.get()
.then(snapshot => {
  snapshot.docs.forEach(doc => {
    let polja = doc.data();
    let id = doc.id;
    console.log(id, " => ", polja);
  });
})
.catch(error => {
  console.error("error getting documents", error);
});
*/

//Poredjenje kada je polje timestamp
/*
let now =new Date();
db.collection("customers")
.where('due_date','<=',firebase.firestore.Timestamp.fromDate(now))
.get()
.then(snapshot => {
  snapshot.docs.forEach(doc => {
    let polja = doc.data();
    let id = doc.id;
    console.log(id, " => ", polja);
  });
})
.catch(error => {
  console.error("error getting documents", error);
});

*/
/*
Iz kolekcije tasks, pročitati sve zadatke, i koji:
Su prioritetni,
Treba da se izvrše u tekućoj godini,
Su završeni,
Tek treba da počnu.
*/
//tek treba da pocnu
/*
db.collection("customers")
.where('start_date','>=',"2020-03-19")
.get()
.then(snapshot => {
  snapshot.docs.forEach(doc => {
    let polja = doc.data();
    let id = doc.id;
    console.log(id, " => ", polja);
  });
})
.catch(error => {
  console.error("error getting documents", error);
});
*/

//Procitati sve klijente koji imaju 22 ,25 ili 28 godina
db.collection("customers")
  .where("age", "in", [22, 25, 28])
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      let polja = doc.data();
      let id = doc.id;
      console.log(id, " => ", polja);
    });
  })
  .catch(error => {
    console.error("error getting documents", error);
  });
