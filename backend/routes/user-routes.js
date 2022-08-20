
const express = require("express")
const multer = require("multer")
const path = require("path")
const { getAllData, cretedData, singleData, findPostData, deleteData, updateData } = require("../controller/user-controller")

const router = express.Router()
const storage = multer.diskStorage({
    destination: function (req,fils,cd) {
        cd(null,"public/uploads")
    },
    filename: function (req, file, cd) {
        const ext = path.extname(file.originalname)
        console.log(ext);
        const fn = "profile-pic-" + Date.now() +ext
        req.body.pic="uploads/" + fn
        cd(null,fn)
    }
})
const uploads = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
        } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
      }
})
router.route("/").get(getAllData).post(uploads.single("avatar"),cretedData)
router.route("/:id").get(singleData).delete(deleteData).put(uploads.single("avatar"), updateData)
router.route("/find/:id").get(findPostData)

module.exports = router;