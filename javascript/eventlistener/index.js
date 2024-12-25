

function buttonclicked(){
    var counter = 0;
    document.querySelector('#mButton').addEventListener('click',function xyz(){
        counter++;
        console.log("button clicked" + counter);
    });
}

buttonclicked();