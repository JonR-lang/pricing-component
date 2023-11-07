const toggleBtn = document.getElementById("toggle-btn");
const priceBasic = document.getElementById("price-basic");
const pricePro = document.getElementById("price-pro");
const priceMaster = document.getElementById("price-master");

toggleBtn.addEventListener("click", () => {
  toggleBtn.children[0].classList.toggle("active");

  if (toggleBtn.children[0].classList.contains("active")) {
    priceBasic.textContent = "$199.99";
    pricePro.textContent = "$249.99";
    priceMaster.textContent = "$399.99";
  } else {
    priceBasic.textContent = "$19.99";
    pricePro.textContent = "$24.99";
    priceMaster.textContent = "$39.99";
  }
});
