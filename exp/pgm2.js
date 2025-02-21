var app = require("express")()
var bodyparser = require("body-parser")
var urlEncoder = bodyparser.urlencoded({extended:false})

app.post("/postfun",urlEncoder,(req,res)=>{
    var un = req.body.un
    var pw = req.body.pw
    res.send("user name: "+un+"<br>password: "+pw)

}).listen(1234)

console.log("port listening at 1234......")