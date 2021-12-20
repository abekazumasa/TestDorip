import Cropper from 'cropperjs';
var cropperImg = document.getElementById('canvas-area');
var cropper;
export function cutoutMode(){
     cropper = new Cropper(cropperImg, {
         viewMode:1,
        crop(event) {
 
        },
      });
}
export function cutoutExecute(){
    if(cropper ==null){
        return;
    }
   var resultImgUrl = cropper.getCroppedCanvas().toDataURL();
   var cropprboxsize = cropper.getCropBoxData();
   console.log(cropprboxsize);
   cropperImg.width =cropprboxsize.width;
   cropperImg.height = cropprboxsize.height;
   cropperImg.style.transform = 'scale(' + 1 + ')';
   cropperImg.setAttribute('width',cropperImg.width);
   cropperImg.setAttribute('height',cropperImg.height);
   cropperImg.setAttribute('data-scale',1);
    cropperImg.src = resultImgUrl;
    cutOutDestroy();
}

export function cutOutDestroy(){
    if(cropper ==null){
        return;
    }
    cropper.destroy();
}


