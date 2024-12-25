const button = document.querySelector('button');
const textNode = document.querySelector('p');

button.addEventListener('click',removeButton);


function removeButton(){

        button.remove();

}

function removeText(){ //ex : hide text on click

    textNode.innerHTML  = "";
}