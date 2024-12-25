const express = require('express');
const { registerUser } = require('../Controllers/userControllers');
const Router = express.Router();

Router.route("/register").post(
//     (req,res)=>{
//     console.log("This is a register route");
//     res.send("User register succcessuflly");
// }
registerUser
)

module.exports = Router