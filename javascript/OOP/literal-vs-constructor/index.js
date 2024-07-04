//literal vs constructor
//boxing vs unboxing

//literal
const st = "ritika";
console.log(st , typeof st);

const st2 = new String("pal");
console.log(st2 , typeof st2);

//boxing 

//when we call the following methods string literal is converted to a string object internally
//as string literals can't call these functions 
console.log(st.toUpperCase());
console.log(st[0]);

//unboxing 
//string object has a lot of methods in it's string prototytpes(tupuppercase,tolowercase,etc methods rae present here) first it searches for "valueof" method in its string prototype 
//if it doesn't fnd it searches in the inherited (object) prototype section there it has "valuOf" method

console.log(st2.valueOf() ,  typeof st2.valueOf());


//boolean and string both have both literal and object 
//array declaration also has both literal and constructor options ,but  arrays are by default extection of objects whether it is declared
//using literal or constructor option

//even function has two ways of declaration -> literal and constuctor function 

const func = (x) => {
    return x*x;
};

console.log(func(3) , typeof func);

const func2 = new Function('x' ,'return x * x');

console.log(func2(9) , typeof func2);

const obj1 = {}; // in backgriund js is doing obj1 = new Object();

const obj2 = new Object();

console.log(obj1 , typeof obj1);
console.log(obj2 , typeof obj2);

