const express = require('express')
const { Server: IOServer } = require('socket.io')
const { Server: HTTPServer } = require('http')
const app = express()
const httpServer = new HTTPServer(app)
const io = new IOServer(httpServer)

const messages = [
  { author: "Pepe", text: "¡Hola! ¿Que tal?" },
  { author: "Alexis", text: "¡Exelente! ¿Y vos, como estas?" },
  { author: "Pepa", text: "Buenisimo!" }
];


app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname })
})

httpServer.listen(8080, () => console.log('Server up on port 8080'))

io.on('connection',socket => {
  socket.emit('messages', messages);

  socket.on('new-message',data => {
      messages.push(data);
      io.sockets.emit('messages', messages);
  });
});

