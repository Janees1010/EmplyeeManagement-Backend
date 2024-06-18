const express = require("express")
const app = express()
const path = require("path")
require('dotenv').config()

app.listen(process.env.PORT,()=>{
    console.log("running on 4000");
})
app.use(express.static(path.join(__dirname,"public")))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'views'))

app.get("/",(req,res)=>{
    res.render("employee")
})

app.get("/login",(req,res)=>{
    res.render("login");
})