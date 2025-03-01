// delete dynamic
var app = require("express")()
app.get("/delfun",(req,bres)=>{
    var usr = req.query["un"]
    var jsonqry={
        gender:usr
    }
    const {MongoClient} = require("mongodb");
    const client = new MongoClient("mongodb://127.0.0.1:27017/")
    client.connect()
    console.log("Connection-Success")
     try{
        const dataset= client.db("manoj").collection("emp").deleteMany(jsonqry)
        dataset.then((cres)=>{
            console.log(cres)
            if(cres.deletedCount>0)
                bres.send(cres.deletedCount+"records successfully deleted")
            else
                bres.send("<h1>No records found in db")
        })
     }
     catch{
        console.log("error")
        client.close()
     }
}).listen(1234)

console.log("port listening at 1234....")