//console.log(db); // objekat konekcije

let kolekcija1 = db.collection('tasks'); // objekat kolekcije
console.log(kolekcija1);

let task01 = kolekcija1.doc('task-01'); // pristup dokumentu preko objekta kolekcije
console.log(task01);

// let task02 = kolekcija1.doc('task-02');
let task02 = db.doc('tasks/task-02'); // pristup dokumentu preko baze
console.log(task02);

let task001 = db.collection('tasks').doc('task-01');  
    // pristup dokumentu preko objekta kolekcije
console.log(task001);

// Dodavanje novog dokumenta u kolekciju

let c1 = {
    name: 66,
    age: 33,
    addresses: ["Beograd", "Pozarevac", "Negotin"],
    salary: 900
};
db.collection('customers').doc().set(c1)
.then(() => {
    console.log("Customer added successfully");
})
.catch((error) => {
    console.error("Error adding customer:", error);