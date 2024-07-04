// console.log("ritika");

//THE GLOBAL OBJECT :
// console.log(global);

setTimeout(() => {
    console.log("inside time out");
    clearInterval(int);
},3000);

let int  = setInterval(() => {
    console.log("inside interval");
},1000);

console.log(__dirname);
console.log(__filename);