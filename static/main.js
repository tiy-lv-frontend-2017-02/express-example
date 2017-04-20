var socket = io.connect("http://10.68.0.156:3000")

var input = document.querySelector('#foo')
var button = document.querySelector('#submit')
var messages = document.querySelector("#messages")

button.addEventListener('click', function(e){
    e.preventDefault()
    var val = input.value

    socket.emit('addMessage', val)
})

socket.on('message', function(message){
    console.log(message)
})

socket.on('messageAdded', function(data){
    messages.innerHTML += data + "<br />"
})