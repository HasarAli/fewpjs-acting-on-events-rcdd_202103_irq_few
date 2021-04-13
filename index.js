function move(node, refpt, amount, unit) {
  let val = node.style[refpt].replace(unit, '');
  val = parseInt(val, 10);
  
  const nodeWidth = node.offsetWidth;
  const parentWidth = node.parentNode.offsetWidth
  
  return new Promise((resolve, reject) => {
    if (val - amount >= 0 && val - amount <= parentWidth - nodeWidth)
      resolve(node.style[refpt] = `${val - amount}${unit}`);
    else
      reject();
  }) 
}

function moveDodgerLeft() {
  return move(dodger, 'left', '1', 'px');
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