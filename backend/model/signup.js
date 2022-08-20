
const mongoose = require("mongoose")

const signupSchema = mongoose.Schema({
    name: {
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
        required: true
    },
    isAdmin: {
        type: Boolean,
        default:false
    }
}, { timestamps: true })

module.exports = mongoose.model("signup",signupSchema)