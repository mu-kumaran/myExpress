var express = require("express")
var app = express()
app.get("/myfun",(req,res)=>{
    var user = req.query["un"]
    var pass = req.query["pw"]
    res.send(user+" "+pass)
    console.log(user+" "+pass)
}).listen(1234)
console.log("Port listening at 1234...")