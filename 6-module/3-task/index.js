import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = createElement(`
      <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
`);
    this.createCarousel();
    this.carouselSlider();
    this.addItem();
  }

  createCarousel() {
    this.carouselInner = document.createElement('div');
    this.carouselInner.classList.add('carousel__inner');
    this.elem.append(this.carouselInner);

    this.slides.forEach((slide) =>
      this.carouselInner.insertAdjacentHTML ('beforeend',
        `<div class="carousel__slide" data-id="${slide.id}">
          <img src="${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
         </div>
        </div>`));
  }

  carouselSlider() {
  const carousel = this.elem.querySelector('.carousel__inner');
  const next = this.elem.querySelector('.carousel__arrow_right');
  const prev = this.elem.querySelector('.carousel__arrow_left')
  const slidesNumber = this.slides.length;
  
  let position = 0;
  
  prev.style.display = 'none';

  next.addEventListener('click', () => {
    position++
    carousel.style.transform = `translateX(${-position * carousel.offsetWidth}px)`

    if(position > 0) {
    prev.style.display = '';
  } 
    
    if (position == slidesNumber - 1) {
      next.style.display = 'none';
    } else {
      next.style.display = '';
    }
  })

  prev.addEventListener('click', () => {
    position--
    carousel.style.transform = `translateX(${-position * carousel.offsetWidth}px)`

    if(position == 0) {
      prev.style.display = 'none';
  } 

    if (position == slidesNumber - 1) {
      next.style.display = 'none';
    } else {
      next.style.display = '';
    }
  })
  }

  _onButtonClick = (slide) => {
    let addProduct = new CustomEvent("product-add", { 
      detail: slide.target.closest('.carousel__slide').dataset.id,
      bubbles: true 
       });
    this.elem.dispatchEvent(addProduct);
  }

  addItem () {
    let buttons = this.elem.querySelectorAll('.carousel__button');

    for (let button of buttons) {
      button.addEventListener ('click', this._onButtonClick)
    }
  }
}
