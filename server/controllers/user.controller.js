const User = require('../models/user.model');
const Post = require('../models/post.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    register: (req, res) => {
        User.findOne({ email: req.body.email })
            .then(user => {
                if (user) {
                    return res.status(400).json({ msg: "Email already in use. Please log in." })
                }
            })
        User.findOne({ username: req.body.username })
            .then(user => {
                if (user) {
                    return res.status(400).json({ msg: "Username already in use. Please choose a different username." })
                }
            })
        User.create(req.body)
            .then(user => {
                const userToken = jwt.sign({ id: user_id }, process.env.SECRET_KEY)
                res
                    .cookie('usertoken', userToken, { httpOnly: true })
                    .json({ msg: "success!", user: user });
            })
            .catch(err => res.json(err));
    },
    login: async (req, res) => {
        const user = await User.findOne({ email: req.body.email })
        if (user == null) {
            return res.status(400).json({ msg: "Invalid login attempt." })
        }
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
        if (!correctPassword) {
            return res.sendStatus(400);
        }
        const userToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
        res
            .cookie("usertoken", userToken, { httpOnly: true })
            .json({ msg: "success!" })
    },
    logout: (req, res) => {
        res.clearCookie('usertoken')
        res.json({ msg: "User logged out" })
    },
    getUser: (req, res) => {
        const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true })
        User.findOne({ _id: decodedJwt.payload.id })
            .then(user => res.json(user))
            .catch(err => res.status(500).json(err))
    },

}