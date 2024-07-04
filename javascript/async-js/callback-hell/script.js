function getData(endpoint){

    return new Promise( (resolve,reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open('GET',endpoint);
    
        xhr.onreadystatechange = function(){
            if(this.readyState===4){
                if(this.status===200){
                    resolve(JSON.parse(this.responseText));
                }
                else{
                    reject("something went wrong");
                }
                
            }
    
    
        };
    
    setTimeout(() => {
        xhr.send();
    },3000);

    })

};

// getData('./movies.json' , (data) => {
//     console.log(data);

//     getData('./directors.json' , (data) => {
//         console.log(data);

//         getData('./actors.json' , (data) => {
//             console.log(data);
//         })
//     })
// })

// -------------------------------------
//replacing above callback hell with promises
//--------------------------------------
// getData('./movies.json').then( (movies) =>{
//     console.log(movies);
//     return getData('./directors.json');
// }).then((directors) => {
//     console.log(directors);
//     return getData('./actors.json');
// }).then((actors) => {
//     console.log(actors);
// }).catch((error) =>{
// console.log(error);
// });

// -------------------------------------------
// PROMISE.ALL()
//--------------------------------------------

let actorsPromise = getData('./actors.json');
let moviesPromise = getData('./movies.json');
let directorsPromise = getData('./directors.json');

let newProm = new Promise((resolve,reject) => {


    setTimeout(() => {
        let error = false;

        if(!error){
            resolve('all is well');
        }else {
            reject('error!!!!');
        }
    },1000)
});

Promise.all([actorsPromise,directorsPromise,moviesPromise,newProm])
.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})
