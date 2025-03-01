// Find operation in Mongodb - static - one(findOne) or many (find)
// Task - find operation in dynamic and update operation in dynamic

var {MongoClient} = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect()
console.log("connection success")

try{
   const dataset =  client.db("manoj").collection("emp").find({sal:{$gte:25000}}).toArray()
   dataset.then((cres)=>{
    console.log(cres) 
   })
}
catch{
    console.log("error")
}