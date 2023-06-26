const userController = require('../controllers/user.controller');

const {register, login, logout, getUser } = userController;

const {authenticate} = require('../configs/jwt.config');

module.exports=app=>{
    app.post('/api/register', register)
    app.post('/api/login', login)
    app.get('/api/user/:email', authenticate, getUser)
    app.get('/api/logout', logout)
    app.get('/api/test', authenticate, (req, res)=>{res.json({message:"hello"})})
}