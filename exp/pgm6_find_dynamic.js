var app=require("express")()
app.get("/searchfun",(req,bres)=>{
    var rno1=req.query["rno"]
    var name1=req.query["name"]    
    if (rno1.length>0)
    {
    var input={
        rno:parseInt(rno1)        
    }
    }
    else
    {
        var input={
            sname:name1
        }
    }
    
    
    var {MongoClient} = require("mongodb")
    const client=new MongoClient("mongodb://127.0.0.1:27017/")
    client.connect()
    console.log("connection success")
    try
    {
    const dataset=client.db("student").collection("details").find(input).toArray()
    dataset.then((cres)=>{
    console.log(cres)
    bres.send(cres)
   
    })
}
catch
{
    console.log("error")
    client.close()
}
}).listen(9993)
console.log("port listening 9993........")
