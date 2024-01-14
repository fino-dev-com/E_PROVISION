
const producttemplate = document.querySelector("[data-products-template]");

const containholder = [{
  id: 'Plannetjuice001',
  image: 'icons/plannet.png',
  name: 'Plannet juice',
  ratings: {
    rating: 5,
    points: 330
  },
  options: `<option value="Parket">Parket</option>`,
  price: 2500 
},
{
  id: 'Mayoroil1litter001',
  image: 'icons/mayor 1ltr.png',
  name: 'Mayor oil 1litter',
  ratings: {
    rating: 4,
    points: 191
  },
  options: `<option value="Pieces">Piece</option>
            <option value="Carton">Carton</option>`,
  price: 1600
},
{
  id: 'SkollBottleBeer',
  image: 'icons/skoll.jpeg',
  name: 'Skoll Bottle Beer',
  ratings: {
    rating: 3,
    points: 91
  },
    options: `<option value="Parket">Parket</option>
              <option value="Pieces">Pieces</option>`,
  price: 21000
},
{
  id: 'UFresh1L001',
  image: 'icons/u-fresh.jpeg',
  name: 'U Fresh 1L',
  ratings: {
    rating: 2,
    points: 53
  },
  options: `<option value="Parket">Parket</option>
            <option value="Pieces">Pieces</option>`,
  price: 2500
},
{
  id: 'Inportedbrownricechamption25kg',
  image: 'icons/rice.jpeg',
  name: 'Inported brown rice (chamption) 25kg',
  ratings: {
    rating: 4,
    points: 101
  },
  options: `<option value="Bag">Bag</option>`,
  price: 13500
},
{
  id: 'PowderPeakmilk400g001',
  image: 'icons/peak milk 2.jpeg',
  name: 'Powder Peak milk 400g',
  ratings: {
    rating: 3,
    points: 67
  },
  options: `<option value="Pieces">Pieces</option>
            <option value="Carton">Carton</option>`,
  price: 3500
},
{
  id: 'Nido400g001',
  image: 'icons/nido-+1.jpg',
  name: 'Nido +1 400g',
  ratings: {
    rating: 4,
    points: 185
  },
  options: `<option value="Pieces">Pieces</option>
            <option value="Carton">Carton</option>`,
  price: 3500
},
{
  id: 'Mambo001',
  image: 'icons/mambo.jpeg',
  name: 'Mambo',
  ratings: {
    rating: 3,
    points: 95
  },
  options: `<option value="Parket">Parket</option>
            <option value="Carton">Carton</option>
            <option value="Pieces">Pieces</option>`,
  price: 3200
},
{
  id: 'HeinekenBeeroriginal002',
  image: 'icons/helneken.jpg',
  name: 'Heineken Beer (original)',
  ratings: {
    rating: 4,
    points: 125
  },
    options: `<option value="Parket">Parket</option>`,
  price: 19000
},
{ 
  id: 'HeinekenBeernigeria001',
  image: 'icons/henieken 2.jpeg',
  name: 'Heineken Beer (nigeria)',
  ratings: {
    rating: 5,
    points: 243
  },
  options: `<option value="Parket">Parket</option>`,
  price: 17500
},
{ 
  id: 'Checkerchidren\sfood001',
  image: 'icons/checker2.png',
  name: 'Checker (chidren\'s food)',
  ratings: {
    rating: 3,
    points: 101
  },
  options: `<option value="Pieces">Pieces</option>
            <option value="Parket">Parket</option>`,
  price: 5000
},
{
  id: 'Cerelacchidren\sfood0001',
  image: 'icons/cerelac 2.jpg',
  name: 'Cerelac (chidren\'s food)',
  ratings: {
    rating: 5,
    points: 302
  },
  options: `<option value="Pieces">Pieces</option>
            <option value="Carton">Carton</option>`,
  price: 2000
},
{
  id: 'BavariaBottledrinknonalcoholic002',
  image: 'icons/bavaria.jpeg',
  name: 'Bavaria Bottle drink (non alcoholic)',
  ratings: {
    rating: 4,
    points: 121
  },
    options: `<option value="Parket">Parket</option>`,
  price: 16500
},
{
  id: 'BavariaCandrinknonalcoholic001',
  image: 'icons/bavaria can.jpeg',
  name: 'Bavaria Can drink (non alcoholic)',
  ratings: {
    rating: 5,
    points: 295
  },
    options: `<option value="Parket">Parket</option>`,
  price: 17500
},
{
  id: 'Amigo25kg001',
  image: 'icons/amigo.png',
  name: 'Amigo 25kg',
  ratings: {
    rating: 3,
    points: 154
  },
  options: `<option value="Bag">Bag</option>`,
  price: 12000
}]
const catergory = [...new Set(containholder.map((item) => {return item}))];
let searchbars = document.querySelectorAll("[data-search]");

searchbars.forEach(searchbar => {
  searchbar.addEventListener('keyup', (e) => {
    const searchinput =  e.target.value.toLowerCase();
    const filterdata = catergory.filter((item) => {
      return (
        item.name.toLocaleLowerCase().includes(searchinput)
      )
    })
    displayitem(filterdata);
  })
});


const displayitem = (items) => {
  document.querySelector('.body-holder').innerHTML=items.map((item) => {
    var { image, name, ratings, price, options, id } = item;
    return ( 
    `<div class="main">
      <div class="main-contian-holder">
        <div class="image-holder">
          <img class="product-image" src="${image}" alt="product image">
        </div>
        <div class="product-name">
          <p>${name}</p>
        </div>
        <div class="product-rating">
          <span>
            <img class="rating-star-image" src="icons/image_rating-star_${ratings.rating}.png" alt="rating star">
          </span>
          <span class="rate-point rate-points.js ${id}rattings">${ratings.points}</span>
        </div>
        <div class="product-description">
            <label for="description">Content :</label>
            <select name="description" class="${id} dscptn" id="description"
            data-product-id="${id}"
            data-product-price="${price}"
            data-product-name="${name}">
              ${options}
            </select>
        </div>
        <div class="product-quantity">
          <label for="quantity">Qty:</label>
          <input type="number"  id="quantity" min="1" class="${id}quantity quty">
        </div>
        <div class="product-price">
          <p class="${id}price">${price}</p>
          frs
        </div>
        <div class="display-message mc">
              <button class="mamn dms-hide ${id}dmessageicn">
                <span class="fa fa-check vx2"></span>
              </button>
              <div class="dms-hide ${id}dmessage">Added to cart</div>
        </div>
        <div class="add-to-cart-button">
          <button class="add-to-cart add-to-cart-js"
          data-product-id="${id}"
          data-product-name="${name}"
          data-product-price="${price}"
          data-product-image="${image}"
          data-product-points="${ratings.points}" onclick="
          ">
            Add to cart
          </button>
        </div>
      </div>
    </div>`)
  }).join('')
  const defaultqtys = document.querySelectorAll('.quty');
  defaultqtys.forEach(defaultqty => {
    if (defaultqty.value === '') {
      defaultqty.value = 1
    }
  })
  fun1();
  fun2();
};
displayitem(catergory);



function fun1() {
  document.querySelectorAll('.add-to-cart-js')
  .forEach(button => {
    button.addEventListener('click', () => {
      const produtImage = button.dataset.productImage;
      const produtName = button.dataset.productName;
      const produtPrice = button.dataset.productPrice;
      const produtId = button.dataset.productId;
      const produtratingspoints = button.dataset.productPoints;
      const fixtid = document.querySelector(`.${produtId}`);
      const quantityid = document.querySelector(`.${produtId}quantity`);
      const priceid = document.querySelector(`.${produtId}price`);
      const rattingsid = document.querySelector(`.${produtId}rattings`);
      const displaymssgicn = document.querySelector(`.${produtId}dmessageicn`);
      const displaymssg = document.querySelector(`.${produtId}dmessage`);
      const productdescription = fixtid.value;
      const productquantity = quantityid.value
      //const rateadd = Number(produtratingspoints) + 1;
      //rattingsid.innerHTML = Number(produtratingspoints) + 1;
      if (rattingsid.classList.contains('rate-point')) {
        document.querySelector(`.${produtId}rattings`).innerHTML =  Number(document.querySelector(`.${produtId}rattings`).innerHTML) + 1;
      }
      
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
          produtImage: produtImage,
          productName: produtName,
          quantity: 1,
          productdescription: productdescription,
          productquantity: productquantity
        });
      }
      
      
      let cartquantitys = 0;
      cart.forEach(items => {
        cartquantitys += items.quantity
      })
      document.querySelector('.cart-notis').innerHTML = cartquantitys;
      

      displaymssgicn.classList.remove('dms-hide');
      displaymssg.classList.remove('dms-hide');
      setTimeout(() => {
        displaymssgicn.classList.add('dms-hide');
        displaymssg.classList.add('dms-hide'); 
      }, 1000);
    })
  })
}

function fun2() {
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








