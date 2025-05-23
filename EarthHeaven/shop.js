const addToCartBtns = document.querySelectorAll('.product button');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let cart = [];

function updateCart() {
  cartItemsList.innerHTML = '';
  cartTotal.textContent = `Total: Rs ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}`;

  cart.forEach(item => {
    const cartItem = document.createElement('li');
    cartItem.textContent = `${item.name} (x${item.quantity}) - Rs ${(item.price * item.quantity).toFixed(2)}`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.dataset.id = item.id;
    removeBtn.addEventListener('click', removeFromCart);
    cartItem.appendChild(removeBtn);
    cartItemsList.appendChild(cartItem);
  });
}

function addToCart(productId) {
  productArray = productId.split(', ');

  var productName = productArray[1];
  var productPrice = parseInt(productArray[0]);

  const existingItem = cart.find(item => item.id === productName);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    const product = { id: productName, quantity: 1 };
    // Replace this with logic to fetch actual product data based on ID
    product.name = productName;
    product.price = 1 * productPrice; // Replace with actual price
    cart.push(product);
  }
  updateCart();
}

function removeFromCart(e) {
  const id = e.target.dataset.id;
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

document.getElementById('checkoutBtn').addEventListener('click', function () {
  var main = document.getElementById('main-container');
  var checkout = document.getElementById('checkout-contain');

  checkout.style.display = 'block';
  main.style.display = 'none';

});

addToCartBtns.forEach(btn => btn.addEventListener('click', () => addToCart(btn.dataset.id)));
  