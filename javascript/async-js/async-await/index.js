const promise = new  Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({
            "name" : "ritika",
            "profession" : "quantum researcher",
        },1000)
})
});

// promise.then((data) => console.log(data));


// async function getUser() {
//     const res = await promise;

//     console.log(res);
// };

// getUser();



//async await in fetch

// async function getTodos() {

//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();

//     console.log(data);

// };

// getTodos();

const getTodos = async () => { 

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    console.log(data);

};

getTodos();