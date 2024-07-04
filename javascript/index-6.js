//execution context
//has 2 parts :
//1)memory creation phase
//2)code execution phase

const x = 50;
const y = 100;

function add(a , b){

    const sum = a + b;
    return sum;
}

const sum1 = add(x,y);
const sum2 = add(4,6);

//step1 : memory creation phase
//1)x varaible is created stored in memory(heap) and assigned undefined
//2)y varaible is created stored in memory(heap) and assigned undefined
//3)all the function code is stored in memory
//4)sum1 varaible is created stored in memory(heap) and assigned undefined
//5)sum2 varaible is created stored in memory(heap) and assigned undefined

//step2 : execution phase
//1)x is assigned value 50
//2)y is assigned value 100
//3)there is nothing ot do in function since it's just the declaration
//4)it comes to sum1 variable and invokes function "add"
//5)now a separate function execution scope is created
//6)memory creation phase of function execution context
//7)a ,b and sum variables are created and assigned "undefined" value
//8)execution phase of function execution context
//9) a is assiigned 50 ,b is assigned 100, sum is asssigned 150 and value is returned
//10)sum1 is asigned 150
//11)on reaching sum2 another function exeution  phase is atrted similar to this one and executed