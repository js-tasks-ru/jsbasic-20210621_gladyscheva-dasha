function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const carouselSlides = document.querySelectorAll('.carousel__slide');
  const next = document.querySelector('.carousel__arrow_right');
  const prev = document.querySelector('.carousel__arrow_left')
  
  let slidesNumber = 4;
  let position = 0;
  let slideWidth = carouselInner.offsetWidth;

  prev.style.display = 'none';

  next.addEventListener('click', () => {
    position++
    carouselInner.style.transform = `translateX(${-slideWidth * position}px)`

    if(position > 0) {
    prev.style.display = '';
  } 

    if (position >= slidesNumber - 1) {
      next.style.display = 'none';
    } else {
      next.style.display = '';
    }
  })

  prev.addEventListener('click', () => {
    position--
    carouselInner.style.transform = `translateX(${-slideWidth * position}px)`

    if(position == 0) {
      prev.style.display = 'none';
  } 

    if (position >= slidesNumber - 1) {
      next.style.display = 'none';
    } else {
      next.style.display = '';
    }
  })
}

