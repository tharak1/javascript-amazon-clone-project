fetch('http://localhost:5000/api/order/', {
  method: 'GET',
  headers: {
      'Accept': 'application/json',
  },
})
.then(function (res){return res.json();console.log(res.json)})
.then(function (orders){
  let orderHTML = '';
  console.log(orders);
  console.log(orders.length);
  if(orders.length === 0 ){
    orderHTML +=`<h1>No orders</h1>`
  }


  else{

    orders.forEach((order) => {
      orderHTML += `
      <div class="order-container">
            
            <div class="order-header">
              <div class="order-header-left-section">
                <div class="order-date">
                  <div class="order-header-label">Order Placed:</div>
                  <div>August 12</div>
                </div>
                <div class="order-total">
                  <div class="order-header-label">Total:</div>
                  <div>${order.priceCents}</div>
                </div>
              </div>
  
              <div class="order-header-right-section">
                <div class="order-header-label">Order ID:</div>
                <div>${order._id}</div>
              </div>
            </div>
  
            <div class="order-details-grid">
              <div class="product-image-container">
                <img src="${order.image}">
              </div>
  
              <div class="product-details">
                <div class="product-name">
                ${order.name}
                </div>
                <div class="product-delivery-date">
                  Arriving on: August 15
                </div>
                <div class="product-quantity">
                  Quantity: ${order.quantity}
                </div>
                <button class="buy-again-button button-primary">
                  <img class="buy-again-icon" src="images/icons/buy-again.png">
                  <span class="buy-again-message">Buy it again</span>
                </button>
              </div>
            </div>
          </div>
      
      `
  })

  }
document.querySelector('.orders-grid' ).innerHTML=orderHTML;
})