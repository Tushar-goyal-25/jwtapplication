const express = require('express');
const router = express.Router()
const cors = require('cors')
const {test, registerUser} = require('../controlers/authcontroler')

//middleware

//connecting backedn with frontend
router.use(
    cors({
        credentials:true ,
        origin:'http://localhost:5173'

}))

//routes to connect the endpoints 

router.get('/', test)
router.post('/register', registerUser)

module.exports = router