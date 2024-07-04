//when we want to multiple instances of the same object we have to keep copying the same object literal multiple times
//hence we should use contructor function or classes

const obj = {
    "name" : "rectangle",
    "height" : 10,
    "width" : 20,
     "area" : function(){
        return this.height*this.width;
     }
};

console.log(obj.area());

for(let [key,value] of Object.entries(obj)){
if(typeof value != 'function'){
   console.log(key,value);
}
};

console.log(Object.getPrototypeOf(obj));

