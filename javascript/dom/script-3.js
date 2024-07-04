//insertAdjacentElement Example

function createAdjElement(){
    const parent = document.querySelector('.parent');

    const h1 = document.createElement('h1');
    h1.textContent = "Adjelement-example";

    parent.insertAdjacentElement('afterend',h1);
}

createAdjElement();

//insertAdjacentText Example

//insertAdjacentHTML Example

//insertBefore Example

/*
beforebegin
<p>
afterbegin

 -foo-

beforeend
</p>
afterend
*/


//insertBefore Example

function insertBeforeExample(){

    const parent = document.querySelector('.parent');

    const h1 = document.createElement('h1');
    h1.textContent = "insertbeforeExample";

    const child = document.querySelector('.child:nth-child(3)'); //on taking nth-child(2) it is taking child-1 ? even though its mentioned that child of class=child is needed!!!!! reason??

    parent.insertBefore(h1,child);

}

insertBeforeExample();


function buildInsertAfter(){

    const parent = document.querySelector('ul');
    
//    let content =  parent.children[2].textContent;
//    parent.children[2].textContent ='insertAfter';

    const child = document.querySelector('li:nth-child(1)');
    const li = document.createElement('li');
    // li.textContent = content;
    li.textContent = "insertAfter"
    parent.insertBefore(li,child.nextSibling);

    // parent.insertBefore(li,child);


}



buildInsertAfter();