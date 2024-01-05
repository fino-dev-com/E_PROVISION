
const producttemplate = document.querySelector("[data-products-template]");

const containholder = [{
  image: 'icons/plannet.png',
  name: 'Plannet juice',
  ratings: {
    rating: 5,
    points: 330
  },
  options: {
    piese: 'hind-option',
    carton: 'hind-option',
    parket: '',
    bag: 'hind-option',
    tin: 'hind-option',
    row: 'hind-option'
  },
  price: 2500 
},
{
  image: 'icons/mayor 1ltr.png',
  name: 'Mayor oil 1litter',
  ratings: {
    rating: 4,
    points: 191
  },
  options: {
     piese: '',
    carton: '',
    parket: 'hind-option',
    bag: 'hind-option',
    tin: 'hind-option',
    row: 'hind-option'
  },
  price: 1600
},
{
  image: 'icons/skoll.jpeg',
  name: 'Skoll Bottle Beer',
  ratings: {
    rating: 3,
    points: 91
  },
  options: {
     piese: 'hind-option',
    carton: 'hind-option',
    parket: '',
    bag: 'hind-option',
    tin: 'hind-option',
    row: 'hind-option'
  },
  price: 21000
},
{
  image: 'icons/u-fresh.jpeg',
  name: 'U Fresh 1L',
  ratings: {
    rating: 2,
    points: 53
  },
  options: {
     piese: 'hind-option',
    carton: 'hind-option',
    parket: '',
    bag: 'hind-option',
    tin: 'hind-option',
    row: 'hind-option'
  },
  price: 2500
},
{
  image: 'icons/rice.jpeg',
  name: 'Inported white rice 25kg',
  ratings: {
    rating: 4,
    points: 101
  },
  options: {
     piese: 'hind-option',
    carton: 'hind-option',
    parket: 'hind-option',
    bag: '',
    tin: 'hind-option',
    row: 'hind-option'
  },
  price: 13500
},
{
  image: 'icons/peak milk 2.jpeg',
  name: 'Powder Peak milk 400g',
  ratings: {
    rating: 3,
    points: 67
  },
  options: {
     piese: '',
    carton: '',
    parket: 'hind-option',
    bag: 'hind-option',
    tin: 'hind-option',
    row: 'hind-option'
  },
  price: 3500
},
{
  image: 'icons/nido-+1.jpg',
  name: 'Nido +1 400g',
  ratings: {
    rating: 4,
    points: 185
  },
  options: {
     piese: '',
    carton: '',
    parket: 'hind-option',
    bag: 'hind-option',
    tin: 'hind-option',
    row: 'hind-option'
  },
  price: 3500
},
{
  image: 'icons/mambo.jpeg',
  name: 'Mambo',
  ratings: {
    rating: 3,
    points: 95
  },
  options: {
     piese: '',
    carton: '',
    parket: '',
    bag: 'hind-option',
    tin: 'hind-option',
    row: 'hind-option'
  },
  price: 2800
},
{
  image: 'icons/helneken.jpg',
  name: 'Heineken Beer (original)',
  ratings: {
    rating: 4,
    points: 125
  },
  options: {
     piese: 'hind-option',
    carton: 'hind-option',
    parket: '',
    bag: 'hind-option',
    tin: 'hind-option',
    row: 'hind-option'
  },
  price: 19000
},
{
  image: 'icons/henieken 2.jpeg',
  name: 'Heineken Beer (nigeria)',
  ratings: {
    rating: 5,
    points: 243
  },
  options: {
     piese: 'hind-option',
    carton: 'hind-option',
    parket: '',
    bag: 'hind-option',
    tin: 'hind-option',
    row: 'hind-option'
  },
  price: 17500
},
{
  image: 'icons/checker2.png',
  name: 'Checker (chidren\'s food)',
  ratings: {
    rating: 3,
    points: 101
  },
  options: {
     piese: '',
    carton: '',
    parket: 'hind-option',
    bag: 'hind-option',
    tin: 'hind-option',
    row: 'hind-option'
  },
  price: 5000
},
{
  image: 'icons/cerelac 2.jpg',
  name: 'Cerelac (chidren\'s food)',
  ratings: {
    rating: 5,
    points: 302
  },
  options: {
     piese: '',
    carton: '',
    parket: 'hind-option',
    bag: 'hind-option',
    tin: 'hind-option',
    row: 'hind-option',
  },
  price: 2000
},
{
  image: 'icons/bavaria.jpeg',
  name: 'Bavaria Bottle drink (non alcoholic)',
  ratings: {
    rating: 4,
    points: 121
  },
  options: {
     piese:'hind-option',
    carton: 'hind-option',
    parket: '',
    bag: 'hind-option',
    tin: 'hind-option',
    row: 'hind-option'
  },
  price: 16500
},
{
  image: 'icons/bavaria can.jpeg',
  name: 'Bavaria Can drink (non alcoholic)',
  ratings: {
    rating: 5,
    points: 295
  },
  options: {
     piese: 'hind-option',
    carton: 'hind-option',
    parket: '',
    bag: 'hind-option',
    tin: 'hind-option',
    row: 'hind-option'
  },
  price: 17500
},
{
  image: 'icons/amigo.png',
  name: 'Amigo 25kg',
  ratings: {
    rating: 3,
    points: 154
  },
  options: {
     piese: 'hind-option',
    carton: 'hind-option',
    parket: 'hind-option',
    bag: '',
    tin: 'hind-option',
    row: 'hind-option'
  },
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
})



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
          <span class="rate-point">${ratings.points}</span>
        </div>
        <div class="product-description">
            <label for="description">Content :</label>
            <select name="description" id="description">
              <option class="${options.piese}" value="Piece">Piece</option>
              <option class="${options.carton}" value="Carton">Carton</option>
              <option class="${options.bag}" value="Bag">Bag</option>
              <option class="${options.parket}" value="Parket">Parket</option>
              <option class="${options.tin}" value="Tin">Tin</option>
              <option class="${options.row}" value="Row">Row</option>
            </select>
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
          <button class="add-to-cart">
            Add to cart
          </button>
        </div>
      </div>
    </div>`)
  }).join('')
};
displayitem(catergory);









