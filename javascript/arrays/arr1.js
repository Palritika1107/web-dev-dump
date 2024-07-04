let arr = [1,2,3,4];



let lastEle = arr.pop();

console.log(lastEle); 

let firstEle = arr.shift();

console.log(firstEle);

//add in end
arr.push(7);
//add in front
arr.unshift(11);

for(let a=0;a<arr.length;a++){
    console.log(arr[a]);
}