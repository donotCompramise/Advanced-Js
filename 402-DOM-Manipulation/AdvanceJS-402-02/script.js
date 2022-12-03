
function clickFun(){
const text=document.createElement('h3')
const imgTag=document.createElement('img')
 text.innerHTML="Image Element Added";
imgTag.src="./g.png"
document.getElementsByTagName('body')[0].appendChild(text);
document.getElementsByTagName('body')[0].appendChild(imgTag);


}
