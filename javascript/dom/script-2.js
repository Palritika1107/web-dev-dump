const parent = document.querySelector('.parent');

// white space after div.parent is termed as "text"  and is counted as a child. tag whitespace tag whitespace tag whitespace is the order

//elements (script.js) include only html tags whereas nodes include everything space,comment,tags ,etc.


let output = parent.childNodes;

//childNodes
//parentNode
//nextSibling
//previousSibling
//firstChild
//lastChild
 
// console.log(output);


//createElement

const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-id';
// div.setAttribute('title','my-element-title');
div.title = 'my-element-title';

// div.innerText = 'Hello World'; //innerText is usually used to change th ealready existing method hence it's better to create a textNode and append it to the div

const text = document.createTextNode('Hello World');
div.appendChild(text);



document.body.appendChild(div);
console.log(div);