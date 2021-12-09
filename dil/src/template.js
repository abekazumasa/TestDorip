
export function getTemplate(num){
    var new_element =document.getElementById('template-test');
    new_element.style.display ='block';
    new_element.width  = 378;
    new_element.height = 454;
    console.log(num);
    if(num==1){
        new_element.src = "./dil/Img/templeate_img.png";
    }else if(num==2){
        new_element.src = "./dil/Img/templeate_img_1.png";
    }else if(num==3){
        new_element.src = "./dil/Img/templeate_img_2.png";
    }else if(num==4){
        new_element.src = "./dil/Img/templeate_img_3.png";
    }else if(num==5){
        new_element.src = "./dil/Img/templeate_img_4.png";
    }else{

    }

}