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

let tasks = db.collection("tasks");
tasks
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      console.log(doc.id, doc.data());
    });
  })
  .catch(error => {
    console.error("Can not get documents from collection", error);
  });
