//document.getElementById

console.log(document.getElementById('one'));
console.log(document.getElementById('one').getAttribute('id'));

document.getElementById('one').title = "new-title";

document.getElementById('one').setAttribute('class','title'); //sets class atttribute to "title" i.e. class="title"

//get or change content

let title = document.getElementById('app-title');

title.textContent = "hellow world";
title.innerText = "hellow world";
title.innerHTML = "<strong>Shopping List</strong>";

title.style.color = "red";
title.style.backgroundColor = "yellow";

console.log(title.textContent);

//document.querySelector('classname/idname/anything/tag/input[type="text"s]/li:nth-child(2)')


// https://www.freecodecamp.org/news/innerhtml-vs-innertext-vs-textcontent/

//innerhtml: retsores tag only cares about markup,read tag +  text,doesn't care about style.renders entire markup
//innerText : restores the styles doesn't care about the tag.displays content as it should be rendered in screen
//textContent : only preserves the text doesn't care about style or tag .renders text as it is in html markup
//outerhtml : => https://www.scmgalaxy.com/tutorials/difference-between-innerhtml-and-outerhtml-in-javascript/



