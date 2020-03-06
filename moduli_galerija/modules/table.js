import { generateImage } from "./general.js";
let generateTable = parent => {
  let table = document.createElement("table");
  table.style.border = "1px solid black";
  parent.appendChild(table);
  return table;
};
