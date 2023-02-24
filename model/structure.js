const mongoose=require('mongoose')

const  userSchema=new mongoose.Schema(
    {
        userID:{
            type:Number,
        },
        id:{
             type:Number,
        },
         title:{
            type:String,
        },
        body:{
            type:String,
        }
    }
)






module.exports = mongoose.model("time", userSchema);