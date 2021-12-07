var angleScale = {
  angle: 0,
  scale: 1
}
var position ={
  x: 0,
  y: 0,
}
export function resizeListener(event){
        var target = event.target
        position.x = (parseFloat(target.getAttribute('data-x')) || 0)
        position.y= (parseFloat(target.getAttribute('data-y')) || 0)

        // update the element's style
        target.style.width = event.rect.width + 'px'
        target.style.height = event.rect.height + 'px'

        // translate when resizing from top or left edges
        position.x += event.deltaRect.left
        position.y += event.deltaRect.top

        target.style.transform = 'translate(' + position.x + 'px,' + position.y + 'px) rotate(' + angleScale.angle + 'deg)'+'scale(' + angleScale.scale + ')'
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
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