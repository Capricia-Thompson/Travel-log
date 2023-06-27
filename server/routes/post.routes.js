const postController = require('../controllers/post.controller');


const { createPost, getAllPosts } = postController;

const { authenticate } = require('../configs/jwt.config');

module.exports = app => {
    app.post('/api/post', createPost)
    app.get('/api/posts', getAllPosts)
}