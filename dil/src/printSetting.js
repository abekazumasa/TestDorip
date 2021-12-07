

export function doprint(){
var canvasData = document.getElementById("canvas-area");
var outputImg = document.getElementById("getImgTag");
var data = canvasData.toDataURL();

outputImg.Width =canvasData.Width;
outputImg.Height = canvasData.Height;
outputImg.src = data;
outputImg.style.transform =canvasData.style.transform;
if(document.getElementById('text')!=null){
var text_data = document.getElementById("text");
var textImage = document.getElementById("textImage");
var text_data_url = text_data.toDataURL();
textImage.Width =text_data.Width;
textImage.Height = text_data.Height;
textImage.src = text_data_url;
textImage.style.transform =text_data.style.transform;
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

// $('.print').removeClass('print');
// $('.print-off').removeClass('print-off');
}