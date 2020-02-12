const blockList = document.querySelectorAll('.block');

blockList.forEach(block => {
  block.style.order = '1';
  block.addEventListener('click', () => {
    block.style.order = '0';
    moveBlocks();
  });
});

function moveBlocks() {
  for (block of blockList) {
    block.style.order = parseInt(block.style.order) + 1;
    console.log(block);
  }
}
