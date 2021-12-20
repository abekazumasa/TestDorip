import interact from 'interactjs';
import {dragMoveListener,resizeListener,startListener,touchListener,endListener,move} from './interactObject.js';
import {getTemplate,zindexCheng} from './template.js';
import {createText,addclass,removeclass} from './inputText.js';
import {doprint} from './printSetting.js';
import {cutoutMode,cutoutExecute,cutOutDestroy} from'./cutOut.js';
import{dosave,checkfiles} from './fileManagement.js';

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
        this.template = $('.sample-btn');
        this.zindexbtn = $('.zindex-up');
        this.save = document.getElementById('save-btn');
        this.bind();
      }
      //イベント
      bind(){
        //保存ボタンが押されたとき
        this.save.addEventListener('click',function(e){
          dosave();
        },false);      
        //アップロードを検知
        this.file.addEventListener('change', (e) => {
          checkfiles(e);
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
        createText();
        addclass();
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
     //テンプレート選択されたとき
    this.template.on('click',function(e){
      getTemplate(e.currentTarget.value);
    });
    this.zindexbtn.on('click',function(e){
      zindexCheng(e.currentTarget.value);
    });
    //textをクリックかそれ以外
    document.addEventListener('click', (e) => {
      if(e.target.closest('#textarea')) {
        addclass();
        
      }
      else {
        removeclass();
      }
    })
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
  .resizable({
    // resize from all edges and corners
    edges: { left: false, right: true, bottom: false, top: false },
    listeners: {
       move:resizeListener,
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: '.main-canvas'
      }),
    ],
    inertia: false
  })

 