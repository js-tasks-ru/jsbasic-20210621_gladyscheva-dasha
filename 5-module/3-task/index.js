function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const carouselSlides = document.querySelectorAll('.carousel__slide');
  const next = document.querySelector('.carousel__arrow_right');
  const prev = document.querySelector('.carousel__arrow_left')
  
  let slidesNumber = 4;
  let i = 0;
  let slideWidth = carouselInner.offsetWidth;

  prev.style.display = 'none';

  next.addEventListener('click', () => {
    i++
    carouselInner.style.transform = `translateX(${-slideWidth * i}px)`

    if(i > 0) {
    prev.style.display = '';
  } 

    if (i >= slidesNumber - 1) {
      next.style.display = 'none';
    } else {
      next.style.display = '';
    }
  })

  prev.addEventListener('click', () => {
    i--
    carouselInner.style.transform = `translateX(${-slideWidth * i}px)`

    if(i == 0) {
      prev.style.display = 'none';
  } 

    if (i >= slidesNumber - 1) {
      next.style.display = 'none';
    } else {
      next.style.display = '';
    }
  })
}

