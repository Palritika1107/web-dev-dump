//1) we can pass multiple event listeners on the same component

const getBtn  = document.querySelector('button');

// getBtn.onclick = function(){
//     alert('clear all!');
// };
function onCLear(){
    // alert('clear all!');
    const list = document.querySelector('ul');
    // list.innerHTML='';
    // const items = list.querySelectorAll('li');
    
    // items.forEach((item) => item.remove());
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
}

getBtn.addEventListener('click',onCLear);

// setTimeout(() => getBtn.removeEventListener('click',onCLear),5000);

// setTimeout(() => getBtn.click(),5000);



