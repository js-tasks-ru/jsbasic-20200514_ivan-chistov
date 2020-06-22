class ProductList {
  productsUrl = '/assets/data/products.json';
  productsStoreKey = 'cart-products';

  constructor(element) {
    this.el = element;

    //this._getData().then(console.log);
  }

  show() {
  	this._paintBase(this.el);
  	console.log(this);
  	return this._getData()
  		.then(data => {

  			for(let card of data){
  			  	this._addCard( this.el.querySelector(".homepage-cards"), card );
  			}

  			this.el.addEventListener('click', (event) => {
 				let {target} = event;

 				if(target.dataset.buttonRole !== "add-to-cart") return;

 				if( confirm('Вы уверенны, что хотите добавить этот товар в корзину?') ){

 					//localStorage.setItem('cart-products', '[]');


 					let cartProducts = JSON.parse( localStorage.getItem('cart-products') ) || [];

  					//console.log(data);
  					//console.log(target.closest('.products-list-product').dataset.productId);

 					//console.log(data[target.dataset.productId]);
 					let id = target.closest('.products-list-product').dataset.productId;
 					
 					cartProducts[id-1] = data[id-1];


 					console.log( cartProducts );

 					localStorage.setItem('cart-products', JSON.stringify(cartProducts));
 					
 					//cartProducts.parse
 				}
  			});

  		});
  }

  _paintBase(element){
  	element.innerHTML = 
  	`
	<div class="row justify-content-end">
    	<div class="col-lg-9">
        	<h3 class="section-title">Top Recommendations for You</h3>
        	<div class="row homepage-cards">
            <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
        	</div>
    	</div>
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

  	if(oldPrice){
  		priceHtml = `<p class="card-text price-text"><strong>${price}</strong>
	            <small class="ml-2">${oldPrice}</small></p>`;
  	} else {
  		priceHtml =  `<p class="card-text price-text discount"><strong>${price}</strong></p>`;
  	}

  	element.insertAdjacentHTML("beforeend",
  	`
	<div data-product-id=${id} class="products-list-product col-md-6 col-lg-4 mb-4">
	    <div class="card">
	        <div class="card-img-wrap">
	            <img class="card-img-top" src=${imageUrl} alt="Card image cap">
	        </div>
	        <div class="card-body">
	            <h5 class="card-title">${title}</h5>
	            <div class="rate">
	                <i class="icon-star checked"></i>
	                <i class="icon-star checked"></i>
	                <i class="icon-star checked"></i>
	                <i class="icon-star checked"></i>
	                <i class="icon-star checked"></i>
	                <span class="rate-amount ml-2">${rating.reviewsAmount}</span>
	            </div>
	            ${priceHtml}

	            <button class="product-add-to-cart" data-button-role="add-to-cart">
	              Add to cart
	            </button>
	        </div>
	    </div>
	</div>
  	`
  	)
  }

  _getData(){  	
  	console.log('getData test');
  	return fetch(`/assets/data/products.json`)
    	.then(res => res.json());


  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
