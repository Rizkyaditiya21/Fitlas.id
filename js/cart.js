// ======= CART SEDERHANA =======
let cart = [];

// Contoh produk (bisa nanti dikembangkan)
const products = [
  { name: "FITLAS Noir", price: 120000 },
  { name: "FITLAS Pearl", price: 150000 }
];

// Fungsi tambah produk ke keranjang (dummy)
function addToCart(productIndex) {
  cart.push(products[productIndex]);
  alert(products[productIndex].name + " berhasil ditambahkan ke keranjang!");
}

// Fungsi bayar manual via WhatsApp
function bayar() {
  if(cart.length === 0) {
    alert("Keranjang kosong! Silakan tambah produk dulu.");
    return;
  }

  let pesan = "Halo Admin FITLAS 👋\n\nSaya ingin melakukan pembayaran manual.\n\nProduk:\n";
  let total = 0;
  cart.forEach((item, idx) => {
    pesan += `${idx+1}. ${item.name} - Rp${item.price.toLocaleString()}\n`;
    total += item.price;
  });
  pesan += `\nTotal: Rp${total.toLocaleString()}\n\nTerima kasih 🙏`;

  const nomor = "6281234567890"; // ganti nomor WA kamu
  const link = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(pesan);
  window.open(link, "_blank");
}

// Tampilkan checkout saat klik tombol Keranjang
document.addEventListener("DOMContentLoaded", function() {
  const checkoutSection = document.getElementById("checkoutSection");
  const cartBtn = document.getElementById("cartBtn");
  const checkoutBtn = document.getElementById("checkoutBtn");

  if(cartBtn) {
    cartBtn.addEventListener("click", function() {
      if(cart.length === 0) {
        alert("Keranjang kosong! Silakan pilih produk dulu.");
        return;
      }
      checkoutSection.style.display = "block";
      window.scrollTo(0, checkoutSection.offsetTop);
    });
  }

  if(checkoutBtn) checkoutBtn.addEventListener("click", bayar);
});
