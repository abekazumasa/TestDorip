//import {loadImage,createCanvasContext} from './getImage.js';
import{loadImage,} from "./setimage.js";
import interact from 'interactjs';
import {dragMoveListener,resizeListener,startListener,touchListener,endListener} from './interactObject.js';
import {getTemplate} from './template.js';
import {createText} from './inputText.js';
import {doprint} from './printSetting.js';
import {cutoutMode,cutoutExecute,cutOutDestroy} from'./cutOut.js';

var sub = document.getElementById('sub_menu');
var text_edit = document.getElementById('text_Edit');
var cutout_edit = document.getElementById('cutout-Edit');
var template_edit = document.getElementById('template_nav');

class IntractClass{
    constructor() {
      this.print_btn = document.getElementById('print-btn');
        this.file = document.getElementById('image_file');
        this.edit_btn = document.getElementById('edit_btn');
        this.text_btn = document.getElementById('text_btn');
        this.cutout = document.getElementById('cutout-btn');
        this.cutoutExe =document.getElementById('cutout-exe');
        this.template_btn = document.getElementById('template_btn');
        this.text_execute = document.getElementById('text_exe');
        this.template = document.getElementById('template1');
        this.template_1 = document.getElementById('template2');
        this.template_2 = document.getElementById('template3');
        this.template_3 = document.getElementById('template4');
        this.template_4 = document.getElementById('template5');
        this.bind();
        this.test();
      }
      test(){
          console.log("get");
      }
      //イベント
      bind(){
        //ファイルアップロードを検知
        this.file.addEventListener('change', (e) => {
          loadImage(e);
      }, false);
      //画像編集が押されたとき
      this.edit_btn.addEventListener('click',function(){
        let chenge = document.getElementsByClassName('chenge');
        cutOutDestroy();
        if(chenge.length!=0){
          chenge = Array.from( chenge );
          chenge.forEach(element => {
            element.classList.remove('chenge');
          });
        }
        sub.classList.toggle('show');
      },false);
      //プリントが押されたとき
      this.print_btn.addEventListener('click',function(){
        cutOutDestroy();
        doprint();
      },false);
    //テキスト入力が押されたとき
       this.text_btn.addEventListener('click',function(){
        sub.classList.toggle('show');
        text_edit.classList.toggle('chenge');
     },false);
    //テキスト適用されたとき
     this.text_execute.addEventListener('click',function(){
      let textval =document.getElementById('text_pro');
     createText(textval);
    },false);
    //切り抜くが押されたとき
    this.cutout.addEventListener('click',function(){
      sub.classList.toggle('show');
      cutout_edit.classList.toggle('chenge');
      cutoutMode();
    },false);   
    //切り取りが押されたとき
    this.cutoutExe.addEventListener('click',function(){
      cutout_edit.classList.toggle('chenge');
      cutoutExecute();
    },false);

     //テンプレートが押されたとき
     this.template_btn.addEventListener('click',function(){
      sub.classList.toggle('show');
      template_edit.classList.toggle('chenge');
     },false);
     //テンプレートの位置
     this.template.addEventListener('click',function(){
       var traget =document.getElementById('template1');
 
       getTemplate(traget.value);
     },false);
     this.template_1.addEventListener('click',function(){
      var traget =document.getElementById('template2');

      getTemplate(traget.value);
    },false);
    this.template_2.addEventListener('click',function(){
      var traget =document.getElementById('template3');

      getTemplate(traget.value);
    },false);
    this.template_3.addEventListener('click',function(){
      var traget =document.getElementById('template4');

      getTemplate(traget.value);
    },false);
    this.template_4.addEventListener('click',function(){
      var traget =document.getElementById('template5');

      getTemplate(traget.value);
    },false);
}
}
new IntractClass();



// target elements with the "draggable" class
interact('.object')
  .draggable({
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: '.main-canvas',
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: true,
    listeners: {
      // call this function on every dragmove event
      move: window.dragMoveListener,
    }
  })
  .gesturable({
    listeners: {
      start: startListener,
      move:touchListener,
      end:endListener,
    }
  })
  // .resizable({
  //   // resize from all edges and corners
  //   edges: { left: false, right: true, bottom: false, top: true },
  //   listeners: {
  //      move:resizeListener,
  //   },
  //   modifiers: [
  //     // keep the edges inside the parent
  //     interact.modifiers.restrictEdges({
  //       outer: '.main-canvas'
  //     }),
  //   ],
  //   inertia: false
  // })