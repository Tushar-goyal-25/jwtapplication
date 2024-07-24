const User = require('../models/user')

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
            res.json('passwrods match')
        }
        if(!match){
            res.json({error: 'incorrect password'})
        }



    } catch (error) {
        console.log(error)
        
    }

}

module.exports = {
    test,
    registerUser,
    loginUser,
}