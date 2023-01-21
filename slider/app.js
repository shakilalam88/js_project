

// let flag = 0;

// const prev = document.getElementsByClassName('prev');
// const next = document.getElementsByClassName('next');

// const slideShow=(e)=>{
//     let slide = document.getElementsByClassName('slide');

//     if(e==slide.length){
//         flag=0;
//         e=0;
//     }else if(e<0){
//         flag=slide.length-1;
//         e=slide.length-1;
//     }

//     for(let y of slide){
//         y.style.display = "none";
//     }
//     slide[e].style.display = "block";
// }
// slideShow(flag)

// function controller(e){
//     flag = flag + (e);
//     slideShow(flag)
// }

let flag = 0;

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
let slide = document.getElementsByClassName('slide');


prev.onclick=function(){
    flag = flag-1;
    if(flag<0){
        flag = slide.length-1;
    }
    slideShow(flag);
}

next.onclick=function(){
    flag = flag + 1;
    if(flag==slide.length){
        flag = 0;
    }
    slideShow(flag);
}
function slideShow(e){
    for(let y of slide){
        y.style.display = "none";
    }
    slide[e].style.display= "block";
}