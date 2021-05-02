const express = require('express');
const morgan = require('morgan')
const mangoose = require('mongoose');
const { result } = require('lodash');
const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes')

// connect string to DB
const dbURI ="mongodb+srv://mitchell:mitchell@appdatabase.mckf8.mongodb.net/AppDataBase?retryWrites=true&w=majority";

mangoose.connect(dbURI, {useNewUrlParser : true, useUnifiedTopology : true})
.then ((result) => app.listen(3000))
.catch((err) => console.log(err));

// express app 

const app = express();

// register view engine

app.set('view engine', 'ejs');

// app.set ('views', 'folder-of-views)


// middle ware static files 
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.use (morgan('dev'));

// mongoose and mango sandbox routes
/** 
app.get ('/add-blog', (req, res) => {

    const blog = new Blog({
        title : 'new blog',
        snippet : 'about my new blog',
        body : 'more about my new blog',
    });

    blog.save().then((result)=> {
        res.send(result);

    }).catch ((err) => {
        console.log(err);
    });
});

app.get('/single-blog', (req, res ) => {
    Blog.findById('608bddfcf8a3420478aa242b').then ((result) =>{
        res.send(result);}).catch ((err) => {
            console.log(err);
        });
    });


app.get('/all-blogs', (req, res)=> {
    Blog.find().then((result)=> {
        res.send(result);
    }).catch((err) => {console.log(err);
    
    })


});

*/





// routes
app.get ('/', (req, res) => {
    res.redirect('/blogs');
});

app.get ('/about', (req, res) => {

    //res.send('<h1> About page !</h1>');
    res.render('about', {title : 'About'});
});

app.get('/about-me', (req,res)=> {
    res.redirect('/about');
});


app.use('/blogs',blogRoutes);

app.use((req, res)=> {
    res.render('404' , {title : 'oops'})
    
});