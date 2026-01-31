let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {
  cart.push({name, price, image});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Produk masuk ke keranjang");
}

function loadCart() {
  let container = document.getElementById("cartItems");
  if(!container) return;
  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    container.innerHTML += `
      <div class="item">
        <img src="${item.image}">
        <div>
          <b>${item.name}</b><br>
          Rp ${item.price.toLocaleString()}
        </div>
        <button onclick="removeItem(${index})">X</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = "Total: Rp " + total.toLocaleString();
}

function removeItem(index){
  cart.splice(index,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function kePayment() {
  window.location.href = "payment.html";
}

loadCart();
