'use strict';

class CheckoutProductList {
  productsStoreKey = 'cart-products';

  constructor(parentElement) {
  	console.log('test CheckoutProductList');

  	this.el = parentElement;
  	let cartProducts = JSON.parse( localStorage.getItem('cart-products') ) || [];

  	this._paintBase(this.el);

  	for(let cart of cartProducts){
  		if(cart){
  			this._addCard( this.el.querySelector(".product-list-box"), cart );
  		}
  	}

  	this.el.querySelector('.product-list-box').addEventListener('click', event => {
  		let {target} = event;

  		if(target.dataset.buttonRole !== "checkout-remove-product") return;

		if( confirm('Вы уверенны, что хотите удалить этот товар из корзины?') ){

			let cartProducts = JSON.parse( localStorage.getItem('cart-products') ) || [];
			let id = target.closest('[data-product-id]').dataset.productId;
			
			//delete cartProducts[id-1];
			//cartProducts[id-1] = null;
			cartProducts[id-1] = {};
			
			console.log( cartProducts );

			target.closest('[data-product-id]').remove();

			localStorage.setItem('cart-products', JSON.stringify(cartProducts));
		}
   		
  	});

  	//console.log([][1].id); тестирование тестов

  }

  _paintBase(element){
  	element.innerHTML = 
  	`
	<div class="product-list-box">
	    <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
	</div>
  	`
  }

  _addCard(element, {id, title, imageUrl, price, oldPrice, rating}){
  	let priceHtml;

  	if(!rating){
  		rating = {
  			reviewsAmount : 0,
  		}
  	}

  	element.insertAdjacentHTML("beforeend",
  	`
	<div data-product-id=${id} class="product-wrapper box-inner-col description-col">

	  <div class="product-image-container">
	    <img class="product-image" src=${imageUrl} alt="img">
	  </div>

	  <div class="product-description">
	    <h4 class="col-title mb-2">${title}</h4>
	    <div class="rate">
	      <i class="icon-star "></i>
	      <i class="icon-star "></i>
	      <i class="icon-star "></i>
	      <i class="icon-star "></i>
	      <i class="icon-star "></i>
	    </div>
	    <p class="rate-amount d-none d-md-block mt-1">${rating.reviewsAmount} reviews</p>
	  </div>

	  <div class="product-price">
	    <p class="mb-0 font-weight-light">Price:</p>
	    <h4 class="col-title price-text mb-2">${price}</h4>
	  </div>

	  <div class="product-remove-button-wrapper">
	    <button type="button"
	            data-button-role="checkout-remove-product"
	            class="product-remove-button">
	      X
	    </button>
	  </div>

	</div>
  	`
  	)

  	let stars = [...this.el.querySelector(`.product-list-box [data-product-id="${id}"]`).querySelectorAll(`.icon-star`)];
  	
  	for(let i = 0; i < rating.stars; i++) {
  		stars[i].classList.add('checked');
  	}

  }


}

window.CheckoutProductList = CheckoutProductList;
