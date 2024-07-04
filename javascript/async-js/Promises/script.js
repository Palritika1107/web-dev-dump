const promise = new Promise((resolve,reject) => {

    setTimeout(() => {

    let error = false;

    if(!error){
    // console.log("async task completed");
    resolve({name : 'ritika',work : 'dev'});
    }else{
        reject('error : something went wrong');
    }
    },1000);
});

// promise.then((data) => {
//     console.log(data);
// }).catch((message) => {
//     console.log(message);
// }).finally(() => {
//     console.log("promise succeded or failed");
// });

// console.log("before promise");

promise.then((obj) => {
    console.log(obj);
    return obj.name;
}).then((name) => {
    console.log(name);
    return name.length;
}).then((length) => {
    console.log(length);
}).catch( (error) => {
    console.log(error);
    return 123;
}).then((x) => {
console.log('hello',x);
})