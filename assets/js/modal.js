const modal = document.getElementById("fprod-popup");
const modalTitle = document.getElementById("popup-title");
const modalImg = document.getElementById("popup-img");
const modalDesc = document.getElementById("popup-desc");
const modalPrice = document.getElementById("popup-price");
const closeBtn = document.querySelector(".close-button");
const form = document.getElementById("orderForm");

document.querySelectorAll(".product").forEach(product =>
{
    product.addEventListener("click", ()=> {
        const title = product.getAttribute("fprod-title");
        const desc = product.getAttribute("fprod-description");
        const img = product.getAttribute("fprod-image");
        const price = product.getAttribute("fprod-price");
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modalPrice.textContent = price;
        modalImg.src = img;
        modal.style.display = "flex";
    });
}
);

closeBtn.addEventListener("click",()=>{
    modal.style.display = "none";
})

form.addEventListener("submit", e => {
  e.preventDefault();
  const qty = form.quantity.value;
  alert(`Your order for ${qty} "${modalTitle.textContent}" has been placed.`);
  modal.style.display = "none";
  form.reset();
});