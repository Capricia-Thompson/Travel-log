const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

require('dotenv').config();
const port = process.env.PORT;

require("./configs/mongoose.config");

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

require('./routes/user.routes')(app);
require('./routes/post.routes')(app);

app.listen(port, () => console.log(`Welcome! Listening on port: ${port}`));