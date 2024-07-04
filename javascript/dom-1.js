console.log(document.all);

let tags = document.all;
console.log(tags[1]);
console.log(tags.length);

console.log(document.documentElement); //gives everything inside the html tag 

console.log(document.head.children); //document.<any tag's name whose children tag list i want>.children

console.log(document.doctype);

console.log(document.domain);

console.log(document.URL);

console.log(document.characterSet);

//we can change or add a  class , id ,href,etc

//document.links[0].href = "https:facebook.com"
//document.links[0].id = "hello-id"
//document.links[0].className = "google-class"

console.log(document.links[0].classList);

//document.links,document.forms return an array like dataStructure known as HTML Collection i.ei we are able 
//to access elements using indices 
//but we cannout runa for loop like forEach and all on it
//document.forms.forEach((form) => console.log(form)); => this will throw an error
//but we can convert it into an array =>  let forms  = Array.from(document.forms);


