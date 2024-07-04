//when we create a new object with "new" keyword
//4 things happen :
//1) a new empty object is created
//2)the constructor function is called with all the arguments
//3)the "this" keyword is assigned to the empty object
//4)the new object is returned

function Rectangle(name,height,width){
    this.name = name;
    this.height = height;
    this.width = width;
    this.area = function(){
        return (this.width * this.height);
    };
};

const obj = new Rectangle("rectangle",30,20);

console.log(obj.area());

const obj2 = new Rectangle("rectangle",40,20);

// console.log(obj2.area());

// console.log(obj.constructor);
// console.log(obj2 instanceof Rectangle);
// console.log(Object.getPrototypeOf(obj));

//add methods to prototype 
//method 1 : 
Rectangle.prototype.isSquare = function(){
    return this.height===this.width;
};

console.log(obj.isSquare());
console.log(obj);

//method2 :
//using Object.create

