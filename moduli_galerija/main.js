import{generateList, generateListItem} from "./modules/list.js"

let ul=generateList(document.body);


generateListItem(ul,"images/photo1.jfif");
generateListItem(ul,"images/photo2.jfif");
generateListItem(ul,"images/photo3.jfif");

let ul2=generateList(document.body);
generateListItem(ul2,"images/photo3.jfif")