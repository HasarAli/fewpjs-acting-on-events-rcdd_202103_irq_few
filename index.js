function move(node, refpt, amount, unit) {
  let val = node.style[refpt].replace(unit, '');
  val = parseInt(val, 10);
  
  const nodeWidth = node.offsetWidth;
  const parentWidth = node.parentNode.offsetWidth
  
  
  if (val - amount >= 0 && val - amount <= parentWidth - nodeWidth)
    node.style[refpt] = `${val - amount}${unit}`;
}

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) 
    dodger.style.left = `${left - 1}px`;
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left < 500 - 40) 
    dodger.style.left = `${left + 1}px`;
}


const dodger = document.querySelector('#dodger');
document.addEventListener("keydown", e => {
  if (e.key === 'ArrowLeft')
    moveDodgerLeft();
  if (e.key === 'ArrowRight')
    moveDodgerRight();
});