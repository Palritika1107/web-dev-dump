const apiUrl = "https://jsonplaceholder.typicode.com/todos";

function getRes(apiUrl){

    fetch(apiUrl + '?_limit=5')
    .then((response) => response.json())
    .then((data) => {
        
        data.forEach((todo) => addToDoToDOM(todo));
        console.log(data)
    
    }) ;
};

const addToDoToDOM = (todo) => {

    const getDiv = document.querySelector('.to-do-list');
    const li = document.createElement('li');
            li.textContent = `${todo.title}`;
            li.setAttribute('data-id',todo.id);
            if(todo.completed === true){
                li.classList.add('done');
            }
            getDiv.appendChild(li);

};

// getRes(apiUrl);

const addNewTodo = (e) => {

    e.preventDefault();

    const newTask = {
       "title" :  e.target.firstElementChild.value,
       "completed" :  false
    }

    fetch(apiUrl , {

        method : 'POST',
        body : JSON.stringify(newTask),
        headers : {
            'Content-Type' : 'application/json',
        },
    }).then((response) => response.json())
    .then((data) => addToDoToDOM(data));


};


const toggleCompleted = (e) => {

    // console.log(e.target.nodeName === 'LI');

    if(e.target.nodeName === 'LI'){
        e.target.classList.toggle('done');
        console.log(e.target.dataset.id);

        updateToDo(e.target.dataset.id,e.target.classList.contains('done'));
        // fetch()
    }

};

const updateToDo = (id,completed) => {

    console.log(id,completed);

    fetch(`${apiUrl}/${id}` , {
        method : 'PUT',
        body : JSON.stringify({completed}),
        headers : {
            'Content-Type' : 'application/json',
        }
    }).then((response) => response.json())
    .then((data) => console.log(data));

};

const deleteCompleted = (e) => {

if(e.target.nodeName === 'LI'){

    const id = e.target.dataset.id;

    fetch(`${apiUrl}/${id}`,{

        method : 'DELETE',

    })
    .then((response) => response.json())
    .then(() => e.target.remove());

}

};

const init = () => {

document.addEventListener('DOMContentLoaded',getRes(apiUrl));
document.querySelector('#todo-form').addEventListener('submit',addNewTodo);
document.querySelector('.to-do-list').addEventListener('click',toggleCompleted);
document.querySelector('.to-do-list').addEventListener('dblclick',deleteCompleted);

};


init();
