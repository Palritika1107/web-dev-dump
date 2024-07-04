//global-scope ,function scope,block scope ,nested scope

//global scope : accessible from everywhere in the program
//function scope : if a variable is declared inside a function , it accessible only within the function
//block scope : if a variable is declared within an "if"  block  or "for"  block (loop ),it is not accessible outside it
//"var" is function scoped but it is not block scoped  , hence var vraible declared inside a block is acceissible outside it as well : we usually won't want this
//both "let" and "const" are function as well as block scoped

//if we declare a var variable globally it gets added to the window object :: which is something we won't want

//nested scope :

function parent(){

    let  x = 5;

    function child(){

        let y = 50;

        console.log(x + y);
    }

    child();

    console.log(x);
    // console.log(y);  //gives error
    
}

parent();


//we can recreate above example using "if"/"for" blocks as well , result will be the same as well.

