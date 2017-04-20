const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('static'))

io.on('connection', function(socket){
    console.log('Client connected...')

    io.to(socket.id).emit("message", "hey, I just met you, and this is crazy")

    socket.on('addMessage', function(data){
        io.emit('messageAdded', data)
    })
})

server.listen(3000, function(){
    console.log('listening on port 3000')
})