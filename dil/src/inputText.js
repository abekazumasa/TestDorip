var data = document.getElementById('testtext');
var text;
var edit;
var dataparent = document.getElementById('textarea');
export function createText(){
  if(text ==null){
    text = new sampleText();
  }
    setValue();
    dataparent.style.display ='block';
    dataparent.setAttribute('display','block');
    dataparent.setAttribute('width',dataparent.clientWidth);
    dataparent.setAttribute('height',dataparent.clientHeight);
    dataparent.setAttribute('zindex',getComputedStyle(dataparent).zIndex);
  if(edit ==null){
    edit = new Textintract();
  }

}
//パラメータ
 class sampleText {
  constructor() {
    this.message = data.textContent;
    this.color = getComputedStyle(data).color;
    this.fontSize = 16;
    this.fontFamily = getComputedStyle(data).fontFamily;
    this.getValue();
  }
  getValue(){
    data.setAttribute('fontsize',  this.fontSize);
    data.setAttribute('color', this.color);
  }
}
//設定更新処理
function setValue() {
  
  data.innerHTML = text.message;
  data.style.color = text.color;
  data.style.fontSize = text.fontSize;
  data.style.fontFamily = text.fontFamily;

}
class Textintract{ 
  constructor(){
    this.dotext();
  }
  dotext(){
    $('#text_pro').on('input', function() {

      $('#testtext').html($('#text_pro')[0].value);
     
    });
    $('#colorpicker').on('input',function(){
    $('#testtext').css('color',$('#colorpicker')[0].value);
    let colorvalue =$('#colorpicker')[0].value;
   
    data.setAttribute('color',colorvalue);
    });
    
    $('#fontsize').on('input',function(){
    $('#testtext').css('font-size',$('#fontsize')[0].value+"px");
    let sizevalue =$('#fontsize')[0].value;
    data.setAttribute('fontsize',sizevalue);
    });
  }
}

var text_area = document.getElementById('textarea');
export function addclass(){
  text_area.classList.add('testname');
}
export function removeclass(){
  text_area.classList.remove('testname');
}


