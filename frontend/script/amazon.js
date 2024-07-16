let token = localStorage.getItem('token')
console.log(token);
async function cartCount(){
  const result =await fetch(`http://localhost:5000/api/cart/count`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
    },
  }).then((res) => res.json())

console.log(result.count);
document.querySelector('.js-cart-quantity' ).innerHTML=result.count;
}

cartCount();
let products=[];
fetch('http://localhost:5000/api/products/get', {
  method: 'GET',
  headers: {
      'Accept': 'application/json',
  },
}).then(function (res){return res.json();})
.then(function (products){
  let genHTML = '';
products.forEach((product) => {
  console.log(product._id);
genHTML +=`
<div class="product-container">
<div class="product-image-container">
  <img class="product-image"
    src="${product.image}">
</div>
<div class="product-name limit-text-to-2-lines">
  ${product.name}
</div>
<div class="product-rating-container">
  <img class="product-rating-stars"
  src="images/ratings/rating-${product.stars * 10}.png">
  <div class="product-rating-count link-primary">
    ${product.count}
  </div>
</div>
<div class="product-price">
  RS: ${Math.round((product.priceCents)*0.82)}
</div>
<div class="product-quantity-container">
  <select>
    <option selected value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select>
</div>
<div class="product-spacer"></div>
<div class="added-to-cart">
  <img src="images/icons/checkmark.png">
  Added
</div>
<button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product._id}" data-product-name="${product.name}" data-product-price="${Math.round((product.priceCents)*0.82)}" ">
  Add to Cart
</button>
</div>`
});





//insert into doc
document.querySelector('.js-products-grid' ).innerHTML=genHTML;
//completed products section


document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  
  button.addEventListener('click',() => {
    
    
   const productId = button.dataset.productId;
  
   findinDB(productId).then((result)=>{
    console.log(result);
    if(result === 'true'){
      console.log("hey u are already present in cart");
      
    }
    else{
      addToCart(productId);
      console.log("product addded with id : ",productId);
      
    }
   });
    
  });
  
});

})  
.catch(function (err){
  console.log(err);
});



function addToCart(pId){

  fetch(`http://localhost:5000/api/cart/${pId}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    },
})
   .then(response => console.log(response.status))


  // function end
}

function findinDB(pId) {
  // const response = await fetch(`http://localhost:5000/api/cart/${pId}`);
  // const found = await response.json();
  // console.log(found);
  // if(found){
  //   return 1
  // }
  // else{
  //   return 0
  // }

  return fetch(`http://localhost:5000/api/cart/find?pId=${pId}`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
    },
})
   .then(response => response.json())
   .then(response => (JSON.stringify(response)))


   
}

