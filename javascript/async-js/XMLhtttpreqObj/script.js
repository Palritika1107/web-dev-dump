const xhr = new XMLHttpRequest();

// xhr.open('GET','./movies.json');
xhr.open('GET','https://api.github.com/users/Palritika1107/repos');

//ready state has 5 possible values
//0 : request not initiated
//1 : server connection established
//2 : request received
//3 : processing request
//4 : request finished and response generated and ready

xhr.onreadystatechange = function(){
    // console.log(this.readyState);
    // console.log(this.status);

    if(this.readyState===4 && this.status===200){
        const data = JSON.parse(this.responseText);

        data.forEach((repo) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;

            document.querySelector('#results').appendChild(li);
        });
    }

};

xhr.send();