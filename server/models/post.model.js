const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."]
    },
    body: {
        type: String,
        required: [true, "Post content is required."],
        minlength: [10, "Post must contain at least 10 characters."],
        maxlength: [500, "Post can not exceed 500 characters."]
    },
    // location:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'destination'
    // },
    poster: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
}, { timestamps: true });

const Post = mongoose.model('post', PostSchema);

module.exports = Post;