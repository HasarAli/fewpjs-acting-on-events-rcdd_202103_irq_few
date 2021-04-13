function move(node, refpt, amount, unit) {
  let val = node.style[refpt].replace(unit, '');
  val = parseInt(val, 10);
  
  const nodeWidth = node.offsetWidth;
  const parentWidth = node.parentNode.offsetWidth
  
  
  if (val - amount >= 0 && val - amount <= parentWidth - nodeWidth)
    node.style[refpt] = `${val - amount}${unit}`;
}

function moveDodgerLeft() {
  const node = dodger;
  const refpt = 'left';
  const amount = '1';
  const unit = 'pt';
  let val = node.style[refpt].replace(unit, '');
  val = parseInt(val, 10);
  
  const nodeWidth = node.offsetWidth;
  const parentWidth = node.parentNode.offsetWidth
  
  
  if (val - amount >= 0 && val - amount <= parentWidth - nodeWidth)
    node.style[refpt] = `${val - amount}${unit}`;
}

function moveDodgerRight() {
  return move(dodger, 'left', '-1', 'px');
}


const dodger = document.querySelector('#dodger');
document.addEventListener("keydown", e => {
  if (e.key === 'ArrowLeft')
    moveDodgerLeft();
  if (e.key === 'ArrowRight')
    moveDodgerRight();
});