const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type

    //res.setHeader('Content-Type', 'text/plain');
    //res.write('Hello I\'m Mitchell');
    res.setHeader('Content-Type', 'text/html');
    //res.write('<h1>Hello I\'m Mitchell </h1>');
    


    fs.readFile('views/index.html', (err, data)=>{
        if (err){ console.log(err);
            res.end();}
        else {
                res.write(data);
                res.end();
                // or we can do res.end(data);
        }

    })
    
    //res.end();

});

server.listen(3000, 'localhost', () => {
    console.log('listening to reqs on port 3000 ...');

});