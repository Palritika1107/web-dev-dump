//IIFE : Immediately Invoked Function Expression
//if an html page is importing more than one js files and if two or more js files have the same variable names 
//it will throw error to avoid that
//we can use IIFE if any variable is IIFE scoped it's not global and only available withing the IIFE

(function(name){
    console.log(name);
})('Ritika');

(function hello(name){
    console.log(name);
})('Hinata');

// hello('Daichi'); //cannot call outside iife