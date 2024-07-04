const parent = document.querySelector('.parent')
// console.log(parent);

let output  = parent.children;

parent.children[1].style.color = 'red';
parent.children[1].innerText = 'Child Two';

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

console.log(output);

//getting parents from child elements

const child = document.querySelector('.child');

child.parentElement.style.border = '2px solid black';
child.parentElement.style.padding = '10px';

//getting siblings

const sibling = document.querySelector('.child:nth-child(2)');
sibling.previousElementSibling.style.color = 'green';
sibling.nextElementSibling.style.color = 'orange';