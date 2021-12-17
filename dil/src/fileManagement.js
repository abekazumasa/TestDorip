var saveelement = ['canvas-area', 'template-test','textarea'];
var savefiles=[];
var loadfiles =[];
var canvas = document.getElementById('canvas-area');


export function checkfiles(e){
    if(!(e.target.value)){
        alert("ファイルが選択されてません");
        return; // ファイルが選択されない場合
    }
    let file_list=e.target.files;
    if(!file_list) {
        alert("ファイルリストがありません");
        return; // ファイルリストが選択されない場合
    } 

    const file = file_list[0];
      if(!file){
          console.log("ファイルがありません");
          return; // ファイルが無い場合
      } 

    if (file.type.match("image.*")) {
        loadImage(file);
    }else {
        onloadData(file);
    }
}


//画像処理
function loadImage(file) {
    var fileReader = new FileReader();
    fileReader.onload = function(){
      var dataUri = this.result;
      draw(dataUri);
    }
    fileReader.readAsDataURL(file);
}
//描画
function draw(url) {
    if (!url) {
      return;
    }
    var img = new Image();
    img.src = url;
    canvas.src =img.src;
    canvas.style.display ='block';
    canvas.setAttribute('display',  'block');
    canvas.setAttribute('zindex',getComputedStyle(canvas).zIndex);
    img.onload = () => {
        drawImageCenter(img);
    }
}
//画像サイズ更新
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

//保存
export function dosave(){
    for(let i=0;i<saveelement.length;i++){
        savevalue(saveelement[i],i);
    }
    let write_json=JSON.stringify(savefiles);
    console.log(write_json);
    let blob=new Blob([write_json], {type: 'application/json'});
    let a=document.createElement("a");
    a.href=URL.createObjectURL(blob);
    document.body.appendChild(a); // Firefoxで必要
    a.download='sample.json';
    a.click();
    document.body.removeChild(a); // Firefoxで必要
    URL.revokeObjectURL(a.href);
    localStorage.setItem('id_getImage', write_json);
}
//ロード
function onloadData(file){

    if (!file.type.match("application/json")) {
        alert("json形式のファイルを選択してください");
        return;
    }
    let file_reader=new FileReader();
    file_reader.readAsText(file);
    file_reader.onload=function(){
        loadfiles=JSON.parse(file_reader.result);
        // let write_json=JSON.stringify(loaddata);
        for(let i=0;i<saveelement.length;i++){
            loadvalue(saveelement,i);
        }
    }
}
//セーブデータ挿入
function savevalue(elements,num){
let element = document.getElementById(elements);
console.log(element);
var savefile ={
    imgsrcs:null,
    imgtransformx:null,
    imgtransformy:null,
    imgangle:null,
    imgscale:null,
    imgwidth:null,
    imgheight:null,
    imgdisplay:null,
    imgzindex:null,
    textcolor:null,
    textsrc:null,
    textsize:null,
};
savefile.imgsrcs=element.src;
savefile.imgtransformx=(parseFloat(element.getAttribute('data-x')) || 0);
savefile.imgtransformy=(parseFloat(element.getAttribute('data-y')) || 0);
savefile.imgangle=(parseFloat(element.getAttribute('data-angle')) || 0);
savefile.imgscale=(parseFloat(element.getAttribute('data-scale')) || 1);
savefile.imgwidth=(parseFloat(element.getAttribute('width')) || 0);
savefile.imgheight=(parseFloat(element.getAttribute('height')) || 0);
savefile.imgdisplay=(element.getAttribute('display') || 'none');
savefile.imgzindex =(element.getAttribute('zindex')||0);

if(num==2){
    let text = element.firstElementChild;
    savefile.textcolor= (text.getAttribute('color')||'#000000');
    savefile.textsrc =text.textContent;
    savefile.textsize =(text.getAttribute('fontsize')||'16px');
}
savefiles[num] =savefile;
}
//ロードデータ挿入
function loadvalue(elements,num){
    let element = document.getElementById(elements[num]);
    let currentdata = loadfiles[num];
    element.src = currentdata.imgsrcs;
    element.style.display =currentdata.imgdisplay;
    element.style.transform ='translate(' +  currentdata.imgtransformx + 'px,' + currentdata.imgtransformy + 'px)'+'rotate(' + currentdata.imgangle + 'deg)'+'scale(' + currentdata.imgscale + ')';
    element.style.zIndex =currentdata.imgzindex;
    if(currentdata.imgwidth==0){
        element.style.width = element.width;
        element.style.height =element.height;
    }else{
        element.style.width = currentdata.imgwidth+"px";
        element.style.height = currentdata.imgheight+"px";
    }
    element.setAttribute('data-x',   currentdata.imgtransformx);
    element.setAttribute('data-y',  currentdata.imgtransformy);
    element.setAttribute('data-angle',  currentdata.imgangle);
    element.setAttribute('data-scale',  currentdata.imgscale);
    element.setAttribute('display',currentdata.imgdisplay);
    element.setAttribute('zindex',currentdata.imgzindex);
    if(num==2){
        let text = element.firstElementChild;
        text.textContent =currentdata.textsrc;
        text.style.color= currentdata.textcolor;
        text.style.fontSize =currentdata.textsize;
        document.getElementById('text_pro').value =currentdata.textsrc;
        document.getElementById('colorpicker').value =currentdata.textcolor;
        document.getElementById('fontsize').value= currentdata.textsize;
    
    }
}