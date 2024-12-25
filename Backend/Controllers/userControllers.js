

exports.registerUser = async(req,res)=>{
    try {
        console.log("This is user registration page in userControllers.js");
        res.status(200).json({message:"registration successful"});
    } catch (err) {
        res.status(500).json({message:"internal server error"});
    }
}
