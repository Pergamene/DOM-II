const blockList = document.querySelectorAll('.block');

let intervalID;
let shift = 0;

// move to top
blockList.forEach(block => {
  block.style.order = '1';

  block.addEventListener('click', () => {
    block.style.order = '0';
    rearrangeBlocks();
  });
});

function rearrangeBlocks() {
  for (block of blockList) {
    block.style.order = parseInt(block.style.order) + 1;
  }
}

// move right
blockList.forEach(block => {
  block.addEventListener('mousedown', () => {
    moveBlock(block);
  });
  
  block.addEventListener('mouseup', () => {
    moveBlockBack(block);
  });
});

function moveBlock(block) {
  window.clearInterval(intervalID);
  intervalID = setInterval(() => {
    console.log(shift);
    shift++;
    if (shift <= 600) {
      block.style.transform = `translateX(${shift}px)`;
    } else {
      window.clearInterval(intervalID);
    }
  }, 5);
}

function moveBlockBack(block) {
  window.clearInterval(intervalID);
  intervalID = setInterval(() => {
    shift--;
    if (shift >= 0) {
      block.style.transform = `translateX(${shift}px)`;
    } else {
      window.clearInterval(intervalID);
    }
  }, 1);
}
