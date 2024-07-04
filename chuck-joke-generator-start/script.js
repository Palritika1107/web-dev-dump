

function generateJoke(){

const xhr = new XMLHttpRequest();


xhr.open('GET','https://api.chucknorris.io/jokes/random');

xhr.onreadystatechange = function(){

    if(this.readyState===4 && this.status===200){

        const data = JSON.parse(this.responseText).value;

        // const joke = data.value;

        document.querySelector('#joke').innerHTML = data;


    }
};

xhr.send();

};

document.querySelector('#joke-btn').addEventListener('click',generateJoke);
// document.addEventListener('DOMContentLoaded',generateJoke); //every time we refresh new joke will be displayed, also used t handle the fact that first time before any button is clicked some joke will be displayed else only Loading.... will be seen

