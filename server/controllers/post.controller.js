const Post = require('../models/post.model');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken')


module.exports = {
    createPost: async (req, res) => {
        const newPost = await Post.create(req.body)
        const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true })
        await User.findByIdAndUpdate(decodedJwt.payload.id,
            { $push: { posts: newPost } },
            { new: true },)
        res.json({ msg: "Post added!" })
    },
    getAllPosts: (req, res) => {
        const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true })
        User.findOne({ _id: decodedJwt.payload.id }).populate('posts')
            .then(user => res.json(user.posts))
            .catch(err => res.status(500).json(err))
    },
}