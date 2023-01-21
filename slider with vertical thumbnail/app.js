const thumbNail = document.querySelectorAll('.thumbNail');
let mainImg = document.getElementById('mainImg');
for(let element of thumbNail){
    element.onclick = function(){
        mainImg.src = element.src
    }
}
const minus = document.querySelector('.fa-chevron-left');
const plus = document.querySelector('.fa-chevron-right');

let count = 0;
minus.onclick=function(){
    count--;
    if(count<0){
        count = thumbNail.length-1;
    }
    slideImage(count)
}
plus.onclick=function(){
    count++;
    if(count == thumbNail.length){
        count = 0;
    }
    slideImage(count);
}
const slideImage =(e)=>{
    mainImg.src = thumbNail[e].src;
}
