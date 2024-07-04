let calculator = {
   
    a : 0,
    b : 0,


  };

  function read(){
    this.a = prompt("enter 1st number",0);
    this.b = prompt("enter 2nd number",0);

  }

  function sum(){
    return (Number(this.a) + Number(this.b));
  }
  
function mul(){
    return (this.a * this.b);
}

calculator.read = read;
calculator.sum = sum;
calculator.mul = mul;


  calculator.read();
  alert( `sum : ${calculator.sum() }`);
  alert( `mul : ${calculator.mul() }`);
