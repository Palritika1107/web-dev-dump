//setInterval clearInterval

// const intervalId = setInterval(callBack,1000);

// function callBack(){
//     console.log(Date.now());
// }

let intervalId;


function stopChange(){

    clearInterval(intervalId);
}

function startChange(){

    if(!intervalId){
        intervalId = setInterval(changeColor,1000);
    }
}

function changeColor(){

    if(document.body.style.backgroundColor !== 'black'){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
    else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}

document.querySelector('#stop').addEventListener('click',stopChange);

document.querySelector('#start').addEventListener('click',startChange);