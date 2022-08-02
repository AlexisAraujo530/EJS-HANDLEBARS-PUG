// const products = []
const products = [
  {
    "name": "Brahma",
    "price": 220,
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNfCk9yS_DXttu8UlrUG9-EtehBASbiC7n2tFmwbdkmi_LuoQypBm3E4xjbCDCiESsSaE&usqp=CAU",
  },
  {
    "name": "Coca-Cola",
    "price": 185,
    "thumbnail": "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3080015_f.jpg",
  },
  {
    "name": "Leche Sach",
    "price": 190,
    "thumbnail": "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/839/products/013-003-008_leche-sachet-cotar-entera-x-1-litro1-09be66ccd63778636415885191543001-640-0.jpg",
  }
]

let id = 1

const listOfProducts = () => {
  return products
}

const getProduct = (id) => {
  return (products.find(product => product.id === parseInt(id)) || { error: 'Producto no encontrado' })
}

const addProduct = (product) => {
  const prod = {
    id: id,
    name: product.name,
    price: product.price,
    thumbnail: product.thumbnail
  }
  products.push(prod)
  id++
}

const updateProduct = (id, newContent) => {
  const product = getProduct(parseInt(id))
  if ((product.id == id) && (product.id != null)) {
    product.name = newContent.name
    product.price = newContent.price
    product.thumbnail = newContent.thumbnail
    return product
  } else {
    return 'Producto no encontrado'
  }
}

const deleteProduct = (id) => {
  const product = getProduct(parseInt(id))
  if ((product.id == id) && (product.id != null)) {
    products.splice(products.indexOf(product), 1)
    return 'Producto eliminado'
  } else {
    return 'Producto no encontrado'
  }
}

module.exports = { listOfProducts, getProduct, addProduct, updateProduct, deleteProduct }