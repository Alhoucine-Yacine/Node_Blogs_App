const express = require('express');

// express app 

const app = express();

// listening 

app.listen(3000);

app.get ('/', (req, res) => {

    //res.send('<h1> App main page !</h1>');
    res.sendFile('./views/index.html', {root : __dirname});
});

app.get ('/about', (req, res) => {

    //res.send('<h1> About page !</h1>');
    res.sendFile('./views/about.html', {root : __dirname});
});

app.get('/about-me', (req,res)=> {
    res.redirect('/about');
});

app.use((req, res)=> {
    res.status(404).sendFile('./views/404.html', {root : __dirname})
    
});