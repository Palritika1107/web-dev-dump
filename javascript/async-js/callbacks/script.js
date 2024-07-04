

// function toggle(e){

//     e.target.classList.toggle('danger');
// }


// document.querySelector('button').addEventListener('click',toggle);

posts = [
{title :'Post One',body : 'This is post one'},
{title :'Post Two',body : 'This is post two'},
];

// function makePosts(post,cb){

//     setTimeout( 
//    () => {
//         posts.push(post);
//         cb();
//     }
//     , 2000);

// }

// function getPosts(){
//     setTimeout(() => {
//     posts.forEach(function(post){
//         const div = document.createElement('div');
//         div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//         document.querySelector('#posts').appendChild(div);
//     });
    
//     },1000);
// }



// makePosts({title :'Post Three' , body : 'new post'},getPosts); //passing getPost as a callback to makePost

// getPosts();

//----------------------------------
//   callback to promise refactor
//----------------------------------

function makePosts(post){

    return new Promise((resolve,reject) => {
        setTimeout( () => {

            let error = true;

            if(!error){
                 posts.push(post);
                 
                 resolve();
             }else{
                reject('something went wrong');
             }
            }
             , 2000);

    })
   

}

function getPosts(){
    setTimeout(() => {
    posts.forEach(function(post){
        const div = document.createElement('div');
        div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
        document.querySelector('#posts').appendChild(div);
    });
    
    },1000);
}

function printError(error){

    let h3 = document.createElement('div');
    h3.innerHTML = `<strong> ${error}<strong>`;
    document.querySelector('#posts').appendChild(h3);
}


makePosts({title :'Post Three' , body : 'new post'}).then(getPosts).catch(printError); //passing getPost as a callback to makePost

