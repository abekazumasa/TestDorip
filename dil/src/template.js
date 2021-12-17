
 var number =0;
 const maxz = 3;
 const minz =0;
export function getTemplate(num){
    var new_element =document.getElementById('template-test');
    new_element.style.display ='block';
    new_element.setAttribute('display',  'block');
    new_element.width  = 378;
    new_element.height = 454;
    new_element.setAttribute('width',   new_element.width );
    new_element.setAttribute('height',  new_element.height );
    new_element.setAttribute('zindex', getComputedStyle(new_element).zIndex);
    number =getComputedStyle(new_element).zIndex;
    var zindexbtn = document.getElementsByClassName('samplezindex');
    for(let i=0 ;i<zindexbtn.length;i++){
        zindexbtn[i].style.display ='none';
    }
    if(num!=0){
    zindexbtn[num].style.display ='block';
    }
    if(num==1){
        new_element.src = "./dil/Img/Valentines_20211215_01.png";
    }else if(num==2){
        new_element.src = "./dil/Img/Birthday_20211215_01.png";
    }else if(num==3){
        new_element.src = "./dil/Img/Christmas_20211215_01.png";
    }else if(num==4){
        new_element.src = "./dil/Img/Fathers_20211215_01.png";
    }else if(num==5){
        new_element.src = "./dil/Img/Mothers_20211215_01.png";
    }else{
        new_element.style.display ='none';
        new_element.setAttribute('display',  'none');
    }

}

export function zindexCheng(num){
    var new_element =document.getElementById('template-test');
   
    if(num==1){
        number=++number;
        if(number>=maxz){
            number=maxz;
        }
        
    }else{
        number=--number;
        if(number<=minz){
            number=minz;
        }

    }
    new_element.style.zIndex =number;
    new_element.setAttribute('zindex', new_element.style.zIndex);
}