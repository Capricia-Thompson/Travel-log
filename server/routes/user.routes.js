const userController = require('../controllers/user.controller');

const { register, login, logout, getUser, updateUser } = userController;

const { authenticate } = require('../configs/jwt.config');

module.exports = app => {
    app.post('/api/register', register)
    app.post('/api/login', login)
    app.get('/api/user', authenticate, getUser)
    app.get('/api/logout', logout)
}