const express = require('express');
const morgan = require('morgan');

//express app
const app = express();

//listen for requests
app.listen(3000);

//set view engine
app.set('view engine','ejs');


app.get('/',(req,res) => {
    const blogs = [
        {title:'yachi meets' , snippet:'Dont eat me '},
        {title:'hinata meets' , snippet:'whats up kageyama'},
        {title:'kageyama meets' , snippet:'Daichi Hinata is the decoy'},
    ];
    res.render('index',{title : 'Happy-New-Year',blogs});
});

app.get('/about',(req,res) => {
    res.render('about');
});

app.get('/blogs/create',(req,res) => {

    res.render('create');
});

//404

app.use((req,res) => {

    res.status(404).render('404');
});