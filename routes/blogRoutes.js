const express = require('express');
const blogController = require('../controllers/blogController')

const router = express.Router();


// Blog Index (GET, redirect to /blogs)
router.get('/', blogController.blog_index );

// Blog Form for New Post (GET)
router.get('/create', blogController.blog_create_get);

// Each post specific page defined by unique id (GET)
router.get('/:id', blogController.blog_details);

// Blog 'New Post' creation action (POST)
router.post('/', blogController.blog_create_post)

// Blog 'Existing Post' delete action (DELETE)
router.delete('/:id', blogController.blog_delete);

module.exports = router;