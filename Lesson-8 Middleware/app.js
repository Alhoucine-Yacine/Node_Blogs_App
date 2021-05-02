const express = require('express');
const morgan = require('morgan')
// express app 

const app = express();

// register view engine

app.set('view engine', 'ejs');

// app.set ('views', 'folder-of-views)


// listening 

app.listen(3000);

// middle ware static files 
app.use(express.static('public'));


app.use (morgan('dev'));





app.get ('/', (req, res) => {

    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];

    //res.send('<h1> App main page !</h1>');
    res.render('index', {title : 'Home', blogs });
});

app.get ('/about', (req, res) => {

    //res.send('<h1> About page !</h1>');
    res.render('about', {title : 'About'});
});

app.get('/about-me', (req,res)=> {
    res.redirect('/about');
});

app.get('/blogs/create' , (req, res) => {
res.render('create', {title : 'create new blog'});


});

app.use((req, res)=> {
    res.render('404' , {title : 'oops'})
    
});