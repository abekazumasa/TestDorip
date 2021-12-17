var angleScale = {
  angle: 0,
  scale: 1
}
var position ={
  x: 0,
  y: 0,
}

var data = document.getElementById('textarea');
var main = document.getElementById('main');
export function resizeListener(event){
  var { x, y } = event.target.dataset

  x = (parseFloat(x) || 0) + event.deltaRect.left

  Object.assign(event.target.style, {
    width: `${event.rect.width}px`,
    transform: `translate(${x}px, ${y}px)`+`rotate( ${angleScale.angle}deg)`+`scale(${angleScale.scale})`,
  })
  Object.assign(event.target.dataset, { x, y })
  event.target.setAttribute('width',  event.rect.width)
}

export function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  position.x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  position.y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  angleScale.angle =(parseFloat(target.getAttribute('data-angle')) || 0)
  angleScale.scale =(parseFloat(target.getAttribute('data-scale'))||1)
  // translate the element
  target.style.transform = 'translate(' +  position.x + 'px,' +  position.y + 'px)'+'rotate(' + angleScale.angle + 'deg)'+'scale(' + angleScale.scale + ')'
  // update the posiion attributes
  target.setAttribute('data-x',  position.x)
  target.setAttribute('data-y',  position.y)
  target.setAttribute('data-angle',  angleScale.angle)
  target.setAttribute('data-scale',  angleScale.scale)
  target.style.transform ='translate(' +  position.x + 'px,' +  position.y + 'px)'+'rotate(' + angleScale.angle + 'deg)'+'scale(' + angleScale.scale + ')'
}
// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;

export function startListener(event){ 
  angleScale.angle = (parseFloat(event.target.getAttribute('data-angle')) || 0) - event.angle
  angleScale.scale = (parseFloat(event.target.getAttribute('data-scale')) || 1)
}
export function touchListener(event){
      var target = event.target;

          // document.body.appendChild(new Text(event.scale))
          var currentAngle = event.angle + angleScale.angle
          var currentScale = event.scale * angleScale.scale
  
          target.style.transform =
         'translate(' +  position.x + 'px,' +  position.y + 'px)' + 'rotate(' + currentAngle + 'deg)' + 'scale(' + currentScale + ')'
          // uses the dragMoveListener from the draggable demo above

          window.dragMoveListener
}
export function endListener(event){
  angleScale.angle = angleScale.angle + event.angle
  angleScale.scale = angleScale.scale * event.scale
  event.target.setAttribute('data-angle',   angleScale.angle)
  event.target.setAttribute('data-scale',  angleScale.scale)
}
