

export function doprint(){
var canvasData = document.getElementById("canvas-area");
let outputImg = document.getElementById("outputImg");
let tempsrc =document.getElementById("template-test");
let tempImage =document.getElementById("tempImage");
let text = document.getElementById("textarea");
tempImage.src = tempsrc.src;
tempImage.style.display =(tempsrc.getAttribute('display')||'none');
tempImage.style.zIndex =(tempsrc.getAttribute('zIndex')||0);
outputImg.src = canvasData.src;
outputImg.style.width =canvasData.clientWidth+'px';
outputImg.style.Height = canvasData.clientHeight+'px';
outputImg.style.transform =canvasData.style.transform;
outputImg.style.zIndex = canvasData.style.zIndex;

$('.print-area').append(text);
$('.print-area').append(outputImg);
$('.printwarp').addClass('print');
$('body > :not(.print)').addClass('print-off');
outputImg.onload = ()=>{
        window.print();
        $('#main').append(text);
}
 $('.print').removeClass('print');
 $('.print-off').removeClass('print-off');
}