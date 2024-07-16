let cart=[];
let token = localStorage.getItem('token')
console.log(token);
fetch('http://localhost:5000/api/cart', {
  method: 'GET',
  headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token,
  },
})
.then(function (res){return res.json();console.log(res.json)})
.then(function (cart){
  let cartHTML = '';
  console.log(cart);
cart.forEach((cartItems) => {
    cartHTML += `
    <div class="cart-item-container">
            <div class="delivery-date">
              Delivery date: Thursday, september 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${cartItems.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${cartItems.name}
                </div>
                <div class="product-price">
                ${cartItems.priceCents}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItems.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>
            </div>
          </div>
    `
})
document.querySelector('.order-summary' ).innerHTML=cartHTML;
});





button = document.querySelector(".place-order-button")
button.addEventListener('click',() => {
  fetch('http://localhost:5000/api/cart',{
    method:'GET',
    headers:{
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token,
      

    }
  }).then(function (res){return res.json();console.log(res.json)})
  .then((cartItem)=>{
    
    cartItem.forEach((ordercart) => {
      console.log(ordercart.name);
      fetch( `http://localhost:5000/api/order/${ordercart._id}`,{
        method:'POST',
        headers:{
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token,
        }
      }).then(res => console.log(res.status))
    })


  });  
});



