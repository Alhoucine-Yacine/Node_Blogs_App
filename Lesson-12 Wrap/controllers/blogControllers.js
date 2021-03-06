const Blog = require('../models/blog');

// blog index, blog details, blog create, blog create post, blog create delete

const blog_index = (req,res) => {
    Blog.find().sort({createdAt : -1}).then((result)=>{
        res.render('index', {title : 'All blogs', blogs :result});
    }).catch ((err) => {
        console.log(err)});

}

const blog_details = (req,res) =>{
    const id = req.params.id;
    //console.log(id);

    Blog.findById(id).then((result)=> {
        res.render('details', {blog :result, title : 'blog details'});
    })
        .catch (err=> {
            res.status(404).render('404', {title : 'Blog not found'})

        });
}

const blog_delete = (req,res) => { 
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then (result => {
        res.json({redirect : '/blogs'})
    })
    .catch (err=> {
        console.log(err);
    })}


const blog_create_post = (req,res)=> {
    const blog = new Blog(req.body);
    blog.save().then((result) => {res.redirect('/blogs')})
    .catch((err)=> {console.log(err)});
 }


const blog_create_get = (req, res) => {
    res.render('create', {title : 'create new blog'});
}


module.exports = {blog_index, blog_details, blog_delete, blog_create_post
    ,blog_create_get}