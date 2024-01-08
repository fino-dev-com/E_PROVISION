
const producttemplate = document.querySelector("[data-products-template]");

const containholder = [{
  image: 'icons/plannet.png',
  name: 'Plannet juice',
  ratings: {
    rating: 5,
    points: 330
  },
  options: `<select name="description" id="description">
              <option value="Parket">Parket</option>
            </select>`,
  price: 2500 
},
{
  image: 'icons/mayor 1ltr.png',
  name: 'Mayor oil 1litter',
  ratings: {
    rating: 4,
    points: 191
  },
  options: `<select name="description" id="description">
              <option value="Piece">Piece</option>
              <option value="Carton">Carton</option>
            </select>`,
  price: 1600
},
{
  image: 'icons/skoll.jpeg',
  name: 'Skoll Bottle Beer',
  ratings: {
    rating: 3,
    points: 91
  },
    options: `<select name="description" id="description">
              <option value="Parket">Parket</option>
              <option value="Pieces">Pieces</option>
            </select>`,
  price: 21000
},
{
  image: 'icons/u-fresh.jpeg',
  name: 'U Fresh 1L',
  ratings: {
    rating: 2,
    points: 53
  },
  options: `<select name="description" id="description">
            <option value="Parket">Parket</option>
            <option value="Pieces">Pieces</option>
          </select>`,
  price: 2500
},
{
  image: 'icons/rice.jpeg',
  name: 'Inported brown rice (chamption) 25kg',
  ratings: {
    rating: 4,
    points: 101
  },
  options: `<select name="description" id="description">
              <option value="Bag">Bag</option>
            </select>`,
  price: 13500
},
{
  image: 'icons/peak milk 2.jpeg',
  name: 'Powder Peak milk 400g',
  ratings: {
    rating: 3,
    points: 67
  },
  options: `<select name="description" id="description">
              <option value="Pieces">Pieces</option>
              <option value="Carton">Carton</option>
            </select>`,
  price: 3500
},
{
  image: 'icons/nido-+1.jpg',
  name: 'Nido +1 400g',
  ratings: {
    rating: 4,
    points: 185
  },
  options: `<select name="description" id="description">
              <option value="Pieces">Pieces</option>
              <option value="Carton">Carton</option>
            </select>`,
  price: 3500
},
{
  image: 'icons/mambo.jpeg',
  name: 'Mambo',
  ratings: {
    rating: 3,
    points: 95
  },
  options: `<select name="description" id="description">
              <option value="Parket">Parket</option>
              <option value="Carton">Carton</option>
              <option value="Pieces">Pieces</option>
            </select>`,
  price: 3200
},
{
  image: 'icons/helneken.jpg',
  name: 'Heineken Beer (original)',
  ratings: {
    rating: 4,
    points: 125
  },
    options: `<select name="description" id="description">
              <option value="Parket">Parket</option>
            </select>`,
  price: 19000
},
{
  image: 'icons/henieken 2.jpeg',
  name: 'Heineken Beer (nigeria)',
  ratings: {
    rating: 5,
    points: 243
  },
  options: `<select name="description" id="description">
              <option value="Parket">Parket</option>
            </select>`,
  price: 17500
},
{
  image: 'icons/checker2.png',
  name: 'Checker (chidren\'s food)',
  ratings: {
    rating: 3,
    points: 101
  },
  options: `<select name="description" id="description">
              <option value="Pieces">Pieces</option>
              <option value="Parket">Parket</option>
            </select>`,
  price: 5000
},
{
  image: 'icons/cerelac 2.jpg',
  name: 'Cerelac (chidren\'s food)',
  ratings: {
    rating: 5,
    points: 302
  },
  options: `<select name="description" id="description">
            <option value="Pieces">Pieces</option>
            <option value="Carton">Carton</option>
          </select>`,
  price: 2000
},
{
  image: 'icons/bavaria.jpeg',
  name: 'Bavaria Bottle drink (non alcoholic)',
  ratings: {
    rating: 4,
    points: 121
  },
  options: `<select name="description" id="description">
              <option value="Parket">Parket</option>
            </select>`,
  price: 16500
},
{
  image: 'icons/bavaria can.jpeg',
  name: 'Bavaria Can drink (non alcoholic)',
  ratings: {
    rating: 5,
    points: 295
  },
    options: `<select name="description" id="description">
              <option value="Parket">Parket</option>
            </select>`,
  price: 17500
},
{
  image: 'icons/amigo.png',
  name: 'Amigo 25kg',
  ratings: {
    rating: 3,
    points: 154
  },
  options: `<select name="description" id="description">
            <option value="Bag">Bag</option>
          </select>`,
  price: 12000
}]
const catergory = [...new Set(containholder.map((item) => {return item}))];
const searchbars = document.querySelectorAll("[data-search]");
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
    var { image, name, ratings, price, options } = item;
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
          <span class="rate-point rate-points.js">${ratings.points}</span>
        </div>
        <div class="product-description">
            <label for="description">Content :</label>
            ${options}
        </div>
        <div class="product-quantity">
          <label for="quantity">Qty:</label>
          <input type="number" placeholder="1" id="quantity" min="1">
        </div>
        <div class="product-price">
          CFA
          <p>${price}</p>
        </div>
        <div class="display-message mc">
              <button class="mamn dms-hide">
                <span class="fa fa-check vx2"></span>
              </button>
              <div class="dms-hide">Added to cart</div>
        </div>
        <div class="add-to-cart-button">
          <button class="add-to-cart add-to-cart-js"
          data-product-name="${name}"
          data-product-price="${price}"
          data-product-image="${image}"
          data-product-points="${ratings.points}">
            Add to cart
          </button>
        </div>
      </div>
    </div>`)
  }).join('')
  
};
displayitem(catergory);

document.querySelectorAll('.add-to-cart-js')
  .forEach(button => {
    button.addEventListener('click', () => {
      const produtImage = button.dataset.productImage;
      const produtName = button.dataset.productName;
      const produtPrice = button.dataset.productPrice;
      const produtratingspoints = button.dataset.productPoints;

      console.log(produtratingspoints);
      let matchingItem;
      cart.forEach(cartItems => {
        if (produtName === cartItems.productName) {
          matchingItem = cartItems;
        }
      })

      if (matchingItem) {
        matchingItem.quantity += 1;
      }else {
        cart.push({
          produtImage: produtImage,
          productName: produtName,
          quantity: 1,
          produtPrice: produtPrice
        })
      }
      
      
      let cartquantitys = 0;
      cart.forEach(items => {
        cartquantitys += items.quantity
      })
      document.querySelector('.cart-notis').innerHTML = cartquantitys;
      
    })
});










