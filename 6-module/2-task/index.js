'use strict';

class Carousel {
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];

  constructor(element) {
    this.el = element;

    this._insertBase(this.el);
    this._insertSlide(this.el.querySelector(`.carousel-inner`), this.slides[0]);
    this.el.querySelector('.carousel-control-next').onclick = (event) => this._nextSlide();
    this.el.querySelector('.carousel-control-prev').onclick = (event) => this._previousSlide();

    this.el.querySelector('.carousel-indicators').addEventListener(`click`, (event) => {
      
      if(event.target.dataset.target !== "#mainCarousel") return;

      this._insertSlide(this.el.querySelector(`.carousel-inner`), this.slides[+event.target.dataset.slideTo]);

      
    })



  }

  _insertBase(element) {
    element.innerHTML = `
      <div id="mainCarousel" class="main-carousel carousel slide">
          <ol class="carousel-indicators">
              <li data-target="#mainCarousel" data-slide-to="0" class="carousel-indicator"></li>
              <li data-target="#mainCarousel" data-slide-to="1" class="carousel-indicator"></li>
              <li data-target="#mainCarousel" data-slide-to="2" class="carousel-indicator"></li>
          </ol>
          <div class="carousel-inner">
              <!--Вот здесь будет активный слайд-->
          </div>

          <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
          </button>
          <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
          </button>
      </div>
    `
  }

  _insertSlide(element, {id, title, img}){
    element.innerHTML = `
      <div class="carousel-item active" data-id=${id}>
          <img src=${img} alt="Activelide">
          <div class="container">
              <div class="carousel-caption">
                  <h3 class="h1">${title}</h3>
                  <div>
                      <a class="btn" href="#" role="button">
                          View all DEALS
                          <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                      </a>
                  </div>
              </div>
          </div>
      </div>
    `

    if( this.el.querySelector(".carousel-indicators .active") ){
        this.el.querySelector(".carousel-indicators .active").classList.remove('active');
    }

    this.el.querySelector(`[data-slide-to="${id}"]`).classList.add('active');
  }

/*  _changeSlide(where){
    //console.log('test _nextSlide');
    let id =  +this.el.querySelector(`.carousel-item`).dataset.id;
    let nextId =  (id === 2) ? 0 : id + 1;
    let previousId =  (id === 0) ? 2 : id - 1;
    //console.log(nextId);
    //console.log(this.slides);
    this._insertSlide(this.el.querySelector(`.carousel-inner`), this.slides[nextId]);    
  }*/

  _nextSlide(){
    let id =  +this.el.querySelector(`.carousel-item`).dataset.id;
    let nextId =  (id === 2) ? 0 : id + 1;
   
    this._insertSlide(this.el.querySelector(`.carousel-inner`), this.slides[nextId]);
    return;
  }

  _previousSlide(){
    let id =  +this.el.querySelector(`.carousel-item`).dataset.id;
    let previousId =  (id === 0) ? 2 : id - 1;

    this._insertSlide(this.el.querySelector(`.carousel-inner`), this.slides[previousId]);
    return;
  }

  /*_changeSlide(id){
    this._insertSlide(id);
  }*/
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;

//let test = new Carousel(document);

//console.log(test.slides);