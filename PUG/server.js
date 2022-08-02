const express = require('express')
const router = require('./src/Routes/routes.js')
const app = express()
const pug = require('pug')
const PORT = 8080
const datos = require('./src/Products/products.js').listOfProducts()


app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/productos', router)
app.get('/', (req, res) => {
  res.render('main');
})
// Server conectado exitosamente
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
// Server con error
server.on("error", (err) => {
  console.log( `El servidor a tenido un error: ${err}`)
})