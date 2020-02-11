const textItems = document.querySelectorAll('h1, h2, h4, a, p');
const busImg = document.querySelector('img');
const imgContent = document.querySelectorAll('.img-content');
const boatImg = document.querySelector('.content-destination img');

// resize
window.addEventListener('resize', event => {
  textItems.forEach(textItem => {
    textItem.style['letter-spacing'] = '-.2em';
  });
  event.preventDefault();
});

// scroll
window.addEventListener('scroll', event => {
  textItems.forEach(textItem => {
    textItem.style['letter-spacing'] = 'normal';
    textItem.style.color = 'black';
  });
  event.preventDefault();
});

// keydown
window.addEventListener('keydown', event => {
  if (event.keyCode === 74) {
    textItems.forEach(textItem => {
      textItem.style.transform = 'translate(0, -20px)';
    });
  }
  event.preventDefault();
});

// keyup
window.addEventListener('keyup', event => {
  if (event.keyCode === 74) {
    textItems.forEach(textItem => {
      textItem.style.transform = 'translate(0, 0)';
    });
  }
  event.preventDefault();
});

// click
busImg.addEventListener('click', event => {
  gsap.to(busImg, {
    duration: 1,
    rotateY: 360
  });
  event.preventDefault();
});

// dblclick
imgContent.forEach(img => {
  img.addEventListener('dblclick', event => {
    img.style.display = 'none';
  });
  event.preventDefault();
});

// mousedown
boatImg.addEventListener('mousedown', event => {
  imgContent.forEach(img => {
    img.style.display = 'block';
  });
  event.preventDefault();
});

// mouseenter
busImg.addEventListener('mouseenter', event => {
  textItems.forEach(textItem => {
    textItem.style['font-style'] = 'italic';
  });
  event.preventDefault();
});

// mouseleave
busImg.addEventListener('mouseleave', event => {
  textItems.forEach(textItem => {
    textItem.style['font-style'] = 'normal';
  });
  event.preventDefault();
});

// mousemove
window.addEventListener('mousemove', event => {
  textItems.forEach(textItem => {
    textItem.style.color = 'red';
  });
  event.preventDefault();
});
