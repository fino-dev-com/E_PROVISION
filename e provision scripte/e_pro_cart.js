
export let cart = JSON.parse(localStorage.getItem('carts'));



if (!cart) {
  cart = [];
}

function savestocart() {
  localStorage.setItem('carts', JSON.stringify(cart))
}

export function addtocart(produtId, produtName, productdescription, productquantity, productamount) {
  let matchingItem;
  cart.forEach(cartItems => {
    if (produtName === cartItems.productName && productdescription === cartItems.productdescription) {
      matchingItem = cartItems;
    }
  })

  if (matchingItem) {
    matchingItem.quantity += 1;
    matchingItem.productquantity = Number( matchingItem.productquantity) + Number(productquantity);
  }else {
    cart.push({
      produtId: produtId,
      productName: produtName,
      quantity: 1,
      productdescription:  productdescription,
      productquantity: productquantity,
      productamount: productamount
    });
  }

  defaultqtydisplay(); 

  savestocart()

}

function defaultqtydisplay() {
  const defaultqtys = document.querySelectorAll('.quty');
  defaultqtys.forEach(defaultqty => {
      defaultqty.value = 1;
  })
}


export function removefromcart(productId) {
   let newcart = [];

   cart.forEach((checkoutitems) => {
      if (checkoutitems.produtId !== productId) {
        newcart.push(checkoutitems)
      }
   })
   cart = newcart;

   savestocart();
   updatecheckoutquantity();
   updatecheckoutsummaryamount();
}

export function updatecheckoutquantity() {
  const hidecheckoutbody =document.querySelector('.checkout-body');
  let checkoutquantity = 0;
  cart.forEach(items => {
      checkoutquantity += items.quantity;
    })
 
  if (checkoutquantity < 10 ) {
    document.querySelector('.js-summary-chk-num').innerHTML = `0${checkoutquantity}`;
  }else {
    document.querySelector('.js-summary-chk-num').innerHTML = checkoutquantity;
  }
  if ((checkoutquantity === 0)) {
    document.querySelector('.checkout-h-title').innerText = `You Cart Is Emty`;
    hidecheckoutbody.classList.add('hide-checkout-body');
  }else {
    document.querySelector('.js-chck-h-title-num').innerHTML = checkoutquantity;
    hidecheckoutbody.classList.remove('hide-checkout-body');
  }
}

export function updatecheckoutsummaryamount() {
  let checkoutsammaryamount = 0;
  cart.forEach(items => {
      checkoutsammaryamount += items.productamount;
    });
  document.querySelector('.js-summary-chk-amount').innerHTML = checkoutsammaryamount;
};

