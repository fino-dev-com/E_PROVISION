import { cart, removefromcart, updatecheckoutquantity, updatecheckoutsummaryamount} from "./e_pro_cart.js";
import {containholder} from "./e_pro_products.js"

let cartsummaryHtml = '';


cart.forEach(checkoutitems => {
  const productId = checkoutitems.produtId
  let matchingproduct;
   
  containholder.forEach(product => {
    if (product.id === productId) {
      matchingproduct = product;
    }
  });
 cartsummaryHtml += `
  <div class="chk-l-b product-image-holder cart-item-div-${matchingproduct.id}${checkoutitems.productdescription}">
    <img class="product-image" src="${matchingproduct.image}" alt="product-image">
  </div>
  <div class="chk-l-b cart-item-div-${matchingproduct.id}${checkoutitems.productdescription} chk-b-product-name">
    ${checkoutitems.productName}
  </div>
  <div class="chk-l-b cart-item-div-${matchingproduct.id}${checkoutitems.productdescription}">
    ${checkoutitems.productdescription}
  </div>
  <div class="chk-l-b cart-item-div-${matchingproduct.id}${checkoutitems.productdescription}">
    ${checkoutitems.productquantity}
  </div>
  <div class="chk-l-b cart-item-div-${matchingproduct.id}${checkoutitems.productdescription}">
    ${checkoutitems.produtPrice}
  </div>
  <div class="chk-l-b cart-item-div-${matchingproduct.id}${checkoutitems.productdescription}">
    ${checkoutitems.productamount}
  </div>
  <div class="chk-l-b cart-item-div-${matchingproduct.id}${checkoutitems.productdescription} chk-option">
    <button class="chk-update-btn">Update</button>
    <button class="chk-delete-btn js-delete-link"
    data-product-id = "${matchingproduct.id}${checkoutitems.productdescription}">Delete</button>
  </div>
  `;
});
document.querySelector('.js-list-body').innerHTML = cartsummaryHtml;

document.querySelectorAll('.js-delete-link')
.forEach((deletebutton) => {
  deletebutton.addEventListener('click', () => {
    const productId = deletebutton.dataset.productId;
    removefromcart(productId);
    const containers = document.querySelectorAll(`.cart-item-div-${productId}`);
    containers.forEach(container => {
      container.remove();
    })
  })
})

updatecheckoutquantity()

updatecheckoutsummaryamount();


