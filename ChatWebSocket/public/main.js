
const socket = io.connect();


function renderMessages(data) {
  const html = data.map((elem, index) => {
      return(`<div>
          <strong>${elem.author}</strong>:
          <em>${elem.text}</em> </div>`)
  }).join(" ");
  document.getElementById('messages').innerHTML = html;
  var elem = document.getElementById('messages');
  elem.scrollTop = elem.scrollHeight;
}

function addMessage(e) {
  const mensaje = {
      author: document.getElementById('username').value,
      text: document.getElementById('texto').value
  };
  document.getElementById('username').value = '';
  document.getElementById('texto').value = '';
  socket.emit('new-message', mensaje);
  return false;
}

function renderProduct(data) {
  const html = data.map((elem, index) => {
      return(`<div>
          <strong>${elem.name}</strong>:
          <em>${elem.price}</em> </div>`)
  }).join(" ");
  document.getElementById('products').innerHTML = html;
  var elem = document.getElementById('products');
  elem.scrollTop = elem.scrollHeight;
}

function addProduct(e) {
  const product = {
      name: document.getElementById('name').value,
      price: document.getElementById('price').value,
      thumbnail: document.getElementById('thumbnail').value,
      id: document.getElementById('id').value
  };
  document.getElementById('name').value = '';
  document.getElementById('price').value = '';
  document.getElementById('thumbnail').value = '';
  socket.emit('new-product', product);
  return false;
}

socket.on('products', data => renderProduct(data));
socket.on('messages',data => renderMessages(data));



