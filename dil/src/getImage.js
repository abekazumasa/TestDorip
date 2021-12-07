var canvas = document.getElementById('canvas-area');
var ctx = canvas.getContext('2d');
var isDrawed =false;

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
  //canvasの描画機能を有効化
 export function createCanvasContext (width,height) {
    canvas.width  = width;
    canvas.height = height;
}
 function draw(url) {
    if (!url) {
      return;
    }
    var img = new Image();
    img.src = url;
    img.onload = () => {
      //画像をcanvasの中心に描画
      drawImageCenter(img);
    }
}
 function drawImageCenter(img) {
     var maincanvas = document.getElementById("main");
     createCanvasContext(maincanvas.clientWidth,maincanvas.clientHeight);
    //幅・高さの上限
    const limit = 0.8;
    const maxW  = canvas.width;
    const maxH  = canvas.height;
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
    //maincanvas.window =drawWidth;
    //maincanvas.height = drawHeight;
    //位置をcanvasの中心にする
    var position = {
      x: maincanvas.width/2,
      y: maincanvas.height/2
    };
   
    //canvasをクリア
    ctx.clearRect(0, 0, drawWidth, drawHeight);
    createCanvasContext(drawWidth,drawHeight);
    ctx.drawImage(img,0,0,drawWidth,drawHeight);
    isDrawed = true;
    }