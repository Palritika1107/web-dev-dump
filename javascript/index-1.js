//default argument
function defaultCheck(arg = 'bot'){

    // if(!arg){
    //     arg = 'Bot';
    // }

    console.log(`${arg} is registered`);

}

defaultCheck('hinata');


//passing an object
function passingObject(obj){

    return `${obj.name} is registered with id ${obj.id}`;
}

let anObj = {
    'name' : 'daichi',
    'id' : 1,
}

console.log(passingObject(anObj));
// console.log(passingObject({
//     'name' : 'ritika',
//     'id' : 5,
// }));


//passing an array
//if multiple args are passed they are automatically conevretd to an array

function passAnArray(arr){

    var randIdx = Math.floor(Math.random() * arr.length);

    console.log(`element at ${randIdx} : ${arr[randIdx]}`);

    let sum = 0 ;

    for(const a of arr){
        sum += a;
    }

    console.log(sum);
}

passAnArray([1,2,3,4,5]);
// passAnArray(1,2,3,4,5);  //the change param to ...arr