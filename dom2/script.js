// roditelj elemenet
let par=document.querySelector('p')
console.log(par.parentElement); //div
console.log(par.parentElement.parentElement);

console.log(par.parentElement.children);
//kolekcija svih dece roditelja paragrafa


//braca/sestre elementi
console.log(par.nextElementSibling);
console.log(par.parentElement.nextElementSibling.children); //dobijamo li
console.log(par.parentElement.parentElement.previousElementSibling) //head

