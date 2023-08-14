const express=require('express')
const { registration } = require('../Controllers/UserController')
const routes=express.Router()
//--------------------------------------------------------
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Set the destination directory for uploaded files
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Set the filename for uploaded files
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });
//--------------------------------------------------------
routes.post("/register",upload.single('file'),registration)

module.exports={routes}