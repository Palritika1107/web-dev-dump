const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res) => {
    // console.log("request sent");
    // console.log(req.url,req.method);
    //response header

    //lodash
    let ran_num = _.random(2,30);
    console.log(ran_num);

    let path = './views/'
    res.setHeader('Content-Type','text/html');

    switch(req.url){
        case '/' : 
                    path += 'index.html';


                    res.statusCode = 200;
                    break;
        case '/about' :
                        path += 'about.html';
                        res.statusCode = 200;
                        break;
        case '/about-me' :
                        res.setHeader('Location','/about');
                        res.statusCode = 301;
                        res.end();
                        // path += 'about.html';
                        // res.statusCode = 301;
                        break;
        default :
                  path += '404.html';
                  res.statusCode = 404;
                  break;
    }

    //send an html file
    fs.readFile(path,(err,data) => {
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    });
    // res.write('<p>hello ninjas</p>');
    // res.write('<p>hello again! ninjas</p>');
    // res.end()
}); 

server.listen(3000,'localhost',() => {
    console.log("listening on port 3000");
});

