const express = require('express');
const router = express.Router()
const cors = require('cors')
const {test, registerUser, loginUser, getProfile} = require('../controlers/authcontroler')

//middleware

router.use(
    cors({
        credentials:true ,
        origin:'http://localhost:5173'

}))

//routes to connect the endpoints 
//create the functions in the controller

router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)

module.exports = router