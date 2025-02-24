// delete operation - dynamic

var app = require("express")()

//nodejs - mongodb connection

var {MongoClient} = require("mongodb")
var client = new MongoClient("mongodb://127.0.0.1:27017/")
client.connect()
console.log("connection success")

app.get("/delfun",(req,res)=>{
    var field_value = req.query['un']
    var fieldJson = {
        user:field_value
    }
    try{
        var dataset = client.db("manoj").collection("emp").deleteMany(fieldJson)
        dataset.then((result)=>{
            if(result.deletedCount>0)
                res.send("record "+field_value+" deleted successfully")
            else
                res.send("Record not found")
            console.log(result)
        })
    }
    catch{
        console.log("error")
        client.close() 
    }

}).listen(1234)
