// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

//REWRITE USING ARROW FUNCTION

let ask = (question,yes,no) => {
    let val = confirm(question)
    if(val){
        return yes();
    }else{
        return no();
    }
}
ask(
        "Do you agree?",
        function() { alert("You agreed."); },
        function() { alert("You canceled the execution."); }
      );