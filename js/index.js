const textItems = document.querySelectorAll('h1, h2, h4, a, p');
const busImg = document.querySelector('img');
const imgContent = document.querySelectorAll('.img-content');
const boatImg = document.querySelector('.content-destination img');

// resize
window.addEventListener('resize', () => {
  textItems.forEach(textItem => {
    textItem.style['letter-spacing'] = '-.2em';
  });
});

// scroll
window.addEventListener('scroll', () => {
  textItems.forEach(textItem => {
    textItem.style['letter-spacing'] = 'normal';
    textItem.style.color = 'black';
  });
});

// keydown
window.addEventListener('keydown', event => {
  if (event.keyCode === 74) {
    textItems.forEach(textItem => {
      textItem.style.transform = 'translate(0, -20px)';
    });
  }
});

// keyup
window.addEventListener('keyup', event => {
  if (event.keyCode === 74) {
    textItems.forEach(textItem => {
      textItem.style.transform = 'translate(0, 0)';
    });
  }
});

// click
busImg.addEventListener('click', () => {
  gsap.to(busImg, {
    duration: 1,
    rotateY: 360
  });
});

// dblclick
imgContent.forEach(img => {
  img.addEventListener('dblclick', () => {
    img.style.display = 'none';
  });
});

// mousedown
boatImg.addEventListener('mousedown', () => {
  imgContent.forEach(img => {
    img.style.display = 'block';
  });
});

// mouseenter
busImg.addEventListener('mouseenter', () => {
  textItems.forEach(textItem => {
    textItem.style['font-style'] = 'italic';
  });
});

// mouseleave
busImg.addEventListener('mouseleave', () => {
  textItems.forEach(textItem => {
    textItem.style['font-style'] = 'normal';
  });
});

// mousemove
window.addEventListener('mousemove', () => {
  textItems.forEach(textItem => {
    textItem.style.color = 'red';
  });
});
