const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogControllers');


router.post('/', blogController.blog_create_post);
router.get('/create' , blogController.blog_create_get);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);
router.get('/', blogController.blog_index);

module.exports = router;