const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express()
const {mongoose} = require('mongoose')

//database connection 
mongoose.connect()

app.use('/' , require('./routes/authroutes'))

const port = 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`))