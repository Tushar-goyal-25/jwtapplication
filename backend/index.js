const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express()
const {mongoose} = require('mongoose')
const cookieParser = require('cookie-parser')


//database connection 
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("database connected"))
.catch ((error) => console.log("error", error))


//middleware for post request

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use('/' , require('./routes/authroutes'))

const port = 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`))