const textItems = document.querySelectorAll('h1, h2, h4, a, p');

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

// dblclick

// mousedown

// mouseenter

// mousemove

// select
