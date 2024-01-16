export function updatedescription() {
  document.querySelectorAll('.dscptn').forEach(itemdescription => {
    itemdescription.addEventListener('click', () => {
      const produtName = itemdescription.dataset.productName;
      const produtId = itemdescription.dataset.productId;
      const fixtid = document.querySelector(`.${produtId}`);
      const priceid = document.querySelector(`.${produtId}price`);
      const productdescription = fixtid.value;
      const productprice = priceid.innerHTML;
      if (productdescription === 'Parket') {
        switch (productdescription === 'Parket') {
          case (produtName === 'Mambo'):
              priceid.innerText = 3200
            break;
        
          default:
            break;
        }
      }
      if (productdescription === 'Carton') {
        switch (productdescription === 'Carton') {
          case (produtName === 'Mambo'):
              priceid.innerText = 19000
            break;
          case (produtName === 'Nido +1 400g'):
            priceid.innerText = 38500
          break;
          case (produtName === 'Mayor oil 1litter'):
              priceid.innerText = 22500
            break;
          case (produtName === 'Powder Peak milk 400g'):
            priceid.innerText = 39000
          break; 
          default:
            break;
        } 
      }
      if (productdescription === 'Pieces') {
        switch (productdescription === 'Pieces') {
          case (produtName === 'Mambo'):
              priceid.innerText = 200
            break;
          case (produtName === 'Nido +1 400g'):
            priceid.innerText = 3500
          break;                                            
          case (produtName === 'Mayor oil 1litter'):
              priceid.innerText = 1600
            break;
          case (produtName === 'Powder Peak milk 400g'):
            priceid.innerText = 3500
          break; 
          default:
            break;
        }
      }
    })
  })
}