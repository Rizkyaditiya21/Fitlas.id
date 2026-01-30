let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {
  cart.push({ name, price, image });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Produk masuk ke keranjang");
}

function loadCart() {
  let container = document.getElementById("cartItems");
  if (!container) return;

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

  document.getElementById("total").innerText =
    "Total: Rp " + total.toLocaleString();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function checkoutWA() {
  let text = "Halo FITLAS, saya mau pesan:%0A";
  let total = 0;

  cart.forEach(item => {
    text += "- " + item.name + "%0A";
    total += item.price;
  });

  text += "%0ATotal: Rp " + total.toLocaleString();
  window.open("https://wa.me/6281234567890?text=" + text);
}

loadCart();
