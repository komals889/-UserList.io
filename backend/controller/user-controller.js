
const user = require("../model/user-model")
exports.getAllData = async(req,res) => {
   try {
    const resutl = await user.find()
    res.json({
        message: "get all Data",
        success: true,
        data:resutl
    })
   } catch (error) {
    res.json({
        message: "error"+error,
    })
   }
}
exports.cretedData = async(req,res) => {
   try {
    const resutl = await user.create(req.body)
    res.json({
        message: "created Data",
        success: true,
        data:resutl
    })
   } catch (error) {
    res.json({
        message: "error"+error,
    })
   }
}
exports.singleData = async(req,res) => {
   try {
    const resutl = await user.findById(req.params.id)
    res.json({
        message: "single Data",
        success: true,
        data:resutl
    })
   } catch (error) {
    res.json({
        message: "error"+error,
    })
   }
}

exports.findPostData = async (req, res) => {
    try {
     const resutl = await user.find({userId:req.params.id})
     res.json({
         message: "find post Data",
         success: true,
         data:resutl
     })
    } catch (error) {
     res.json({
         message: "error"+error,
     })
    } 
}
 
exports.deleteData = async (req, res) => {
    try {
     const resutl = await user.findByIdAndDelete(req.params.id)
     res.json({
         message: "delete Data",
         success: true,
         data:resutl
     })
    } catch (error) {
     res.json({
         message: "error"+error,
     })
    } 
}
 
exports.updateData = async (req, res) => {
    try {
     const resutl = await user.findByIdAndUpdate(req.params.id,req.body,{new:true})
     res.json({
         message: "update Data",
         success: true,
         data:resutl
     })
    } catch (error) {
     res.json({
         message: "error"+error,
     })
    } 
 }