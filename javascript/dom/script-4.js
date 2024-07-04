//remove and 

//remove child

function removeEle(){

    const ele = document.querySelector('.parent h1');
    ele.remove();
}

removeEle();

function childRemove(){
    const parent = document.querySelector('ul');
    const child =  document.querySelector('li:nth-child(2)');

    parent.removeChild(child);


}

childRemove();