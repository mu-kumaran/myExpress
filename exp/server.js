const app = require("express")()
const socketio = require("socket.io")
const http = require("http")

const port = process.env.PORT||1234

const server = http.createServer(app)
var io =socketio(server)

//called function
io.on("connection",(socket)=>{
    socket.on("manojevent",(msg)=>{
        console.log("New message from client:",msg)
    })
})

app.get("/",(req,res)=>{
    res.sendFile("D:/Software/Livewire_notes/myExpress/html/client.html")
})

server.listen(port)
console.log("port listening at 1234...")