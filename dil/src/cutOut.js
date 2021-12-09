import Cropper from 'cropperjs';
var cropperImg = document.getElementById('canvas-area');
var cropper;
export function cutoutMode(){
     cropper = new Cropper(cropperImg, {
         viewMode:1,
        crop(event) {
          console.log(event.detail.x);
          console.log(event.detail.y);
          console.log(event.detail.width);
          console.log(event.detail.height);
          console.log(event.detail.rotate);
          console.log(event.detail.scaleX);
          console.log(event.detail.scaleY);
        },
      });
}
export function cutoutExecute(){
    if(cropper ==null){
        return;
    }
   var resultImgUrl = cropper.getCroppedCanvas().toDataURL();
    cropperImg.src = resultImgUrl;
    cutOutDestroy();
}

export function cutOutDestroy(){
    if(cropper ==null){
        return;
    }
    cropper.destroy();
}


