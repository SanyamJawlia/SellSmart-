const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("express js server");
})

const user = require("./Routes/userRoutes")

app.use("/api",user);

const port = 3000;

app.listen(port,()=>{
    console.log(`server is running on port:${port}`);
})