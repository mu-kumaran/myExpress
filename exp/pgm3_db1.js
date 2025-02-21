var app = require("express")()
var bp = require("body-parser")
var {MongoClient} = require("mongodb")
//const uri = "mongodb://127.0.0.1:27017"

var urlencoder = bp.urlencoded({extended:false})
app.post("/insertfun",urlencoder,(req,res)=>{
    var un=req.body.un
    var pw=req.body.pw
    var resjson = {
        user:un,
        pass:pw
    }

    //Mongodb connection
    const client = new MongoClient("mongodb://127.0.0.1:27017")
    client.connect()
    console.log("connection success")

    try{
        const dataset = client.db("manoj").collection("emp").insertOne(resjson)
        dataset.then((result)=>{
            console.log("answer success :",result)
            res.send("inserted success"+result)
        })
    }
    catch{
        console.log("error")
        client.close()
    }
}).listen(1234)
console.log("port listening at 1234")