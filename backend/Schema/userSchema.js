import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    email :{
        type : String,
        requierd : true,
        unique : true,
    },
    password :{
        type :String,
        requierd : true
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema);
export default User;