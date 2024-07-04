//arrow function

let add = (a,b) => {
    return (a + b);
};

console.log(add(9,10));

let double = a => a*2;

console.log(double(4));

let func = () => {

    console.log("hello");
}

func();

let func2 = () => {
    return {
        "name" : "ritika",
    }
}

let obj = func2();

console.log(obj.name);
