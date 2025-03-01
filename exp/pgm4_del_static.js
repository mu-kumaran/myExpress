// Delete operation using NodeJS - static

const {MongoClient} = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017/")
client.connect()
console.log("Connection-Success")
 try{
    const dataset= client.db("manoj").collection("emp").deleteOne({user:"manoj"})
    dataset.then((res)=>{
        console.log(res)
    })
 }
 catch{
    console.log("error")
 }