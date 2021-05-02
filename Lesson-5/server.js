const http = require('http');
const fs = require('fs');
const _ = require ('lodash');

const server = http.createServer((req, res) => {

    let path = './views/';

    //loadash
    const num = _.random(0,20);
    console.log(num);

    const greet = _.once (() => {

            console.log("hello");
    
    });
    //console.log(req.url, req.method);

    greet();
    greet();
    res.setHeader('Content-Type', 'text/html');
    
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about' :
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
        default :
            path += '404.html';
            res.statusCode = 404;
            break;

    }


    fs.readFile(path, (err, data)=>{
        if (err){ console.log(err);
            res.end();}
        else {
                
                res.write(data);
                res.end();
        }

    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening to reqs on port 3000 ...');

});