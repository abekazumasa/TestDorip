var canvas = document.getElementById('canvas-area');
export function loadImage(e) {
    if (!e.target.files[0]) {
      return;
    }
    const file = e.target.files[0];
    //画像以外のファイルは無効
    if (!file.type.match("image.*")) {
      alert('画像をアップロードしてください');
      return;
    }
    //FileオブジェクトからURLを生成
    const urlObj = window.URL || window.webkitURL;
    const url = urlObj.createObjectURL(file);
    //canvasに描画
    draw(url);
}

function draw(url) {
    if (!url) {
      return;
    }
    var img = new Image();
   
    img.src = url;
    canvas.src =img.src;

    img.onload = () => {
        drawImageCenter(img);
    }
}
function drawImageCenter(img) {
    var maincanvas = document.getElementById("main");
    
   const maxW  = maincanvas.clientWidth;
   const maxH  = maincanvas.clientHeight;
   var drawHeight = 0;
   var drawWidth =0;
   //描画する画像の幅もしくは高さが上限を超える場合
   if (img.width >= maxW || img.height >= maxW) {
     //高さの上限に合わせる
     drawWidth = maxW;
     drawHeight = drawWidth * (img.height / img.width);
     //はみ出す場合は幅の上限に合わせる
     if (drawHeight >= maxW) {
       drawHeight = maxH;
       drawWidth = drawHeight * (img.width / img.height);
     }
   }
   //それ以外はそのままのサイズで表示
   else {
     drawWidth = img.width;
     drawHeight = img.height;
   }
   canvas.width = drawWidth;
   canvas.height = drawHeight;

}