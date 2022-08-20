
const user = require("../model/signup")
const jwt = require("jsonwebtoken")
const bcrypt=require("bcryptjs")
exports.login = async (req,res) => {
  try {
    const { email,password} = req.body
      const result = await user.findOne({ email })
      if (!result) {
          return res.status(400).json({
              success:false,
              message: "Invalid Email"    
          })
      }

      const verify = await bcrypt.compare(password, result.password)
      if (!verify) {
        return res.status(400).json({
            success:false,
            message: "Invalid password"    
        })
      }
      
      const token = jwt.sign({ userId: result._id }, process.env.JWT_SECRET_KEY)
      res.json({
          message: "Login Successfully",
          allData:result,
          token
      })
  } catch (error) {
       res.json({
              success:false,
              message: "something went wrong"+error    
          })
  }
}