//fetch a .json file
fetch('./movies.json')
.then((response) => response.json())
.then((data) => console.log(data));
//fetch from a text file
fetch('./textFile.txt')
.then((response) => response.text())
.then((data) => console.log(data));

//fetch from an api
fetch('https://api.github.com/users/Palritika1107/repos')
.then((response) => response.text())
.then((data) => console.log(data));