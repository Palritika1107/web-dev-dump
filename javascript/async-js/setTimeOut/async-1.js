//js is synchronous in nature with async capabilities 
//blocking code refers to code that blocks/stops execution of code that comes after it ,until current code execution is completed;

//setTimeOut clearTimeout

function changeHeading(){

    const heading  = document.querySelector('h1');
    heading.textContent = 'Hello from callback';
}

const timerId = setTimeout(changeHeading,5000);

// console.log("print before setTimeout");

const cancelBtn = document.querySelector('button');

cancelBtn.addEventListener('click',() => {
    console.log(timerId);
    clearTimeout(timerId);
    console.log("timer cancelled");
})

