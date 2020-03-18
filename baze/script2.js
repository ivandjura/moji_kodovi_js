let task = db.collection("tasks").doc("tasks-03");
console.log(task);

task
  .get()
  .then(doc => {
    if (doc.exists) {
      let temp = doc.data();
      console.log(doc.id, temp);
    } else {
      console.log("No such document");
    }
  })
  .catch(error => {
    console.log("Cannot get document: ", error);
  });

//dohvatamo sve dokumente iz kolekcije
/*
task.get()
.then(doc => {
    if(doc.exists) {
        let temp = doc.data();
        console.log(doc.id, temp);
    }
    else {
        console.log("No such document");
    }
})
.catch(error => {
    console.error("Cannot get document: ", error);
});
*/

/*
let document = db.collection('...').doc('...');
Kod dokumenta imate sledece metode:
    // CRUD - Create, Read, Update, Delete
    document.set(...) => postavlja polja (Create)
    document.update(...) => menja postojeca polja (Update)
    document.delete() => brise dokument (Delete)
    document.get() => dohvata vrednosti polja dokumenta (Read)
Nakon bilo koje od ovih metoda pozivaju se potom metode
    .then() i .catch()
*/
