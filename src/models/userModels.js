import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "Provide a unique username"],
        unique:[true, "UserName already taken "]   
        
    },
    email:{
        type:String,
        required:[true, "Provide a unique email"],
        unique:[true, "Email already taken "]

    },

    password: {
        type:String,
        required:[true, "Provide a password"],
        minlength: [8, "Password must be at least 8 characters"],
        maxlength: [20, "Password must be at most 20 characters"],


    },

    isVerified: {
        type: Boolean,
        default: false
    },

    isAdmin: {
        type: Boolean,
        default: false
    
    },

    forgotPasswordToken:String,
    forgotPasswordExpires:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,


})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;