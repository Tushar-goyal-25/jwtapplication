const {mongoose, Schema} = require('mongoose')
const {Schema} = mongoose


//setting up a user schema for the databse 

const userSchema = new Schema ({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String
})

const userModel = mongoose.model('User', userSchema)
modeule.exports= userModel;