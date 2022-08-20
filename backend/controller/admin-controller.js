
const user = require("../model/signup")
exports.getAllUserData = async(req,res) => {
    try {
        const result = await user.find({isAdmin:false})
        res.json({
            message: "get All User Data",
            success: true,
            data:result
        }) 
    } catch (error) {
        res.json({
            message: "Error"+error,
            success: false,
            data:null
        }) 
    }
}