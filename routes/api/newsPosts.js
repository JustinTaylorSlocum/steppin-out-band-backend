const express = require('express');
const router = express.Router();

// NewsPosts Model
const NewsPost = require('../../models/NewsPost');


// Get All Posts
router.get('/getallposts', (req, res) => {
  NewsPost.find()
  .sort({ date: -1 })
  .then(newsPosts => res.json(newsPosts))
  });

// Get Post
router.get('/getpost/:id', (req, res) => {
  NewsPost.findById(req.params.id)
  .then(newsPost => res.json(newsPost))
  .catch(err => res.status(404).json({ success: false }));
});

// Create Post
router.post('/createpost', (req, res) => {
  const newNewsPost = new NewsPost({
    title: req.body.title,
    body: req.body.body
});
newNewsPost.save().then(newsPost => res.json(newsPost));
});

module.exports = router;