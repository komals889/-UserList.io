
const mongoose = require("mongoose")

const bikeSchema = mongoose.Schema({
    userId: {
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"signup"
    },
    userName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        uniq:true
    },
    password: {
        type: String,
        required:true
    },
    pic: {
        type: String,
        required:true
    },
    userinfo:{
        type:Object,
        require:true
    }
}, { timestamps: true })

module.exports = mongoose.model("bikeTask",bikeSchema)