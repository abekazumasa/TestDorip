

export function doprint(){
let canvasData = document.getElementById("canvas-area");
let outputImg = document.getElementById("getImgTag");
let tempImage =document.getElementById("tempImage");
let tempsrc =document.getElementById("template-test");
tempImage.src = tempsrc.src;
outputImg.src = canvasData.src;
outputImg.style.width =canvasData.clientWidth+'px';
outputImg.style.Height = canvasData.clientHeight+'px';
outputImg.style.transform =canvasData.style.transform;
outputImg.style.zIndex = canvasData.style.zIndex;
if(document.getElementById('text')!=null){
let text_data = document.getElementById("text");
let textImage = document.getElementById("textImage");
let text_data_url = text_data.toDataURL();
textImage.Width =text_data.Width;
textImage.Height = text_data.Height;
textImage.src = text_data_url;
textImage.style.transform =text_data.style.transform;
textImage.style.zIndex = text_data.style.zIndex;
$('.print-area').append(textImage);
}
$('.print-area').append(outputImg);
$('.printwarp').addClass('print');
$('body > :not(.print)').addClass('print-off');
outputImg.onload = ()=>{
    if(document.getElementById('text')!=null){
        textImage.onload =()=>{
            window.print();
        }
    }else{
        window.print();
    }
}
 $('.print').removeClass('print');
 $('.print-off').removeClass('print-off');
}