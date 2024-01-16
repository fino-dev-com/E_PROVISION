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
        case (produtName === 'Mambo Chocolate'):
            priceid.innerText = 3200
        break;
        case (produtName === 'Top milk (powder) 36g'):
          priceid.innerText = 4250
        break;
        
          default:
            break;
        }
      }
      if (productdescription === 'Roll') {
        switch (productdescription === 'Roll') {
        case (produtName === 'Top milk (powder) 36g'):
          priceid.innerText = 900
        break;
        case (produtName === 'Ozil 18g'):
          priceid.innerText = 500
        break;
    
          default:
            break;
        }
      }
      if (productdescription === 'Bag') {
        switch (productdescription === 'Bag') {
          case (produtName === 'Ozil 18g'):
              priceid.innerText = 6300
            break;
          case (produtName === 'Ozil 1kg'):
            priceid.innerText = 13000
          break;
      
          default:
            break;
        }
      }
      if (productdescription === 'Carton') {
        switch (productdescription === 'Carton') {
        case (produtName === 'Mambo Chocolate'):
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
        case (produtName === 'Mayor oil 5litter'):
          priceid.innerText = 30000
        break;
        case (produtName === 'Celor oil 5litter'):
          priceid.innerText = 32000
        break;
        case (produtName === 'Cerelac 400g (childern food)'):
            priceid.innerText = 21600
          break;
        case (produtName === 'Guigoz 1 milk 400g (childern 1-6months)'):
          priceid.innerText = 34000
        break;       
        case (produtName === 'Guigoz 2 milk 400g (childern 6months-1y)'):
          priceid.innerText = 34000
        break;
        default:
            break;
        } 
      }
      if (productdescription === 'Pieces') {
        switch (productdescription === 'Pieces') {
          case (produtName === 'Mambo Chocolate'):
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
          case (produtName === 'Mayor oil 5litter'):
            priceid.innerText = 8000
          break;
          case (produtName === 'Celor oil 5litter'):
            priceid.innerText = 85000
          break;                                            
          case (produtName === 'Cerelac 400g (childern food)'):
              priceid.innerText = 2000
            break;
          case (produtName === 'Guigoz 1 milk 400g (childern 1-6months)'):
            priceid.innerText = 3000
          break; 
          case (produtName === 'Guigoz 2 milk 400g (childern 6months-1y)'):
            priceid.innerText = 3000
          break;
          case (produtName === 'Ozil 1kg'):
            priceid.innerText = 1500
          break;
          default:
            break;
        }
      }
    })
  })
}