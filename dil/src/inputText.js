
export function createText(element){
    var parent_element = document.getElementById('main');
    var new_element = document.createElement('canvas');
    var strlemgth =strLength(element.value);
    console.log(strlemgth);
    new_element.width  = (48*strlemgth)/2+7;
    new_element.height = 60;
    new_element.classList.add("object");
    new_element.setAttribute("id","text");
    var objectcount = document.getElementsByClassName('object');
    new_element.style.zIndex =10+objectcount.length;
    parent_element.appendChild(new_element);
    var ctx = new_element.getContext('2d');
    ctx.font = "48px serif";
    var textwid = ctx.measureText(element.value);
    console.log(new_element.width);
    console.log(textwid.width);
    ctx.fillText(element.value, 0, 48);
}


function strLength(strSrc){
 let len = 0;
	strSrc = escape(strSrc);
	for(let i = 0; i < strSrc.length; i++, len++){
		if(strSrc.charAt(i) == "%"){
			if(strSrc.charAt(++i) == "u"){
				i += 3;
				len++;
			}
			i++;
		}
	}
	return len;
}


