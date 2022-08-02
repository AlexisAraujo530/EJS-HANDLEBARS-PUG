const express = require('express')
const router = require('../Routes/routes.js')
const app = express()
const PORT = 8080
const datos = require('../Products/products.js').listOfProducts()


//middleware
// app.set('views', '../Views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/productos', router)
app.get('/', (req, res) => {
  res.render('form', {datos});
})
// Server conectado exitosamente
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
// Server con error
server.on("error", (err) => {
  console.log( `El servidor a tenido un error: ${err}`)
})