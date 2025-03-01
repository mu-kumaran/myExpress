// update operation - dynamic

var app = require("express")()

//nodejs - mongodb connection

var {MongoClient} = require("mongodb")
var client = new MongoClient("mongodb://127.0.0.1:27017/")
client.connect()
console.log("connection success")

app.get("/updatefun",(req,res)=>{
    var field_name = req.query['fn']
    var field_value = req.query['fv']
    var fieldJson = {
        field_name : field_value
    }
    try{
        var dataset = client.db("manoj").collection("emp").updateOne({field_name:50},{$set:fieldJson})
        dataset.then((result)=>{
            // if(result.deletedCount>0)
            //     res.send("record "+field_value+" deleted successfully")
            // else
            //     res.send("Record not found")
            console.log(result)
        })
    }
    catch{
        console.log("error")
        client.close() 
    }

}).listen(1234)
