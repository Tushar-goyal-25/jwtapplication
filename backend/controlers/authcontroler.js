const User = require('../models/user')
const jwt = require('jsonwebtoken')
const {hashPassword, comparePasswords} = require('../helpers/auth')
//test get connection

const test = (req,res) => {
    res.json('test is working')
}


//register user function
const registerUser = async (req,res) => {
    try{
        const {name,email,password} = req.body;
        // check if name was entered 
        if (!name){
            return res.json({
                error: 'name is required'
            }
            )
        };
        //check if password was entered
        if (!password || password.length < 6){
            return res.json({
                error:'Password is required and should be atleast 6 characters long'
            })
        
        }
        //check email
        const exist = await User.findOne({email}); //it is async to fetch data 
        if (exist){
            return res.json({
                error:'Email already exists please login'
            })
        }

        //hashing the password
        const hashedPassword = await hashPassword(password)
         //create a user in database 
        const user = await User.create({
            name, email, password: hashedPassword,
        })

        return res.json(user)

    }
    catch (error){
            console.log(error)
    }
    
}


//login endpoint
const loginUser = async (req, res) => {
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        //check user exists
        if(!user){
            return res.json({
                error:'User not found'
            })

        }
        const match = await comparePasswords(password, user.password);
        if(match){
            //jsonwebtoken
            jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(user)
            })
        }
        if(!match){
            res.json({error: 'incorrect password'})
        }



    } catch (error) {
        console.log(error)
        
    }

}

//getprofile endpoint

const getProfile = (req,res) => {
    const {token} = req.cookies //get the cookies from the header
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, {}, (err,user) => {  //verify the jsonwebtoken
            if(err) throw err;
            res.json(user);
        })
    }
    else{
        res.json(null)
    }
}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
}