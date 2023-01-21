// const menu = document.querySelector('.wrapper');
// const shareMenu = document.querySelector('.share-menu');

// document.addEventListener('contextmenu',(e)=>{
//     e.preventDefault();

//     let x = e.offsetX;
//     let y = e.offsetY;

//     winWidth = window.innerWidth;
//     menuHeight = menu.offsetHeight;
    
//     winHeight = window.innerHeight;
//     menuWidth = menu.offsetWidth;
    
    

//     if(x> (winWidth - (menuWidth + shareMenu.offsetWidth))){
//         shareMenu.style.left = '-200px'
//     }else{
//         shareMenu.style.left='';
//         shareMenu.style.right='-200px';
//     }

//     x = x>winWidth-menuWidth?winWidth-menuWidth:x
//     y =y>winHeight-menuHeight?winHeight-menuHeight:y

//     menu.style.left =`${x}px`;
//     menu.style.top =`${y}px`
//     menu.style.visibility = 'visible'
// })

// document.addEventListener('click',()=>{
//     menu.style.visibility ='hidden'
// })

let menu = document.querySelector('.wrapper');
let shareMenu = document.querySelector('.share-menu');

document.addEventListener('contextmenu',(e)=>{
    e.preventDefault();

    let x = e.offsetX;
    let y = e.offsetY;

    menu.style.visibility = 'visible';
    menu.style.left = `${x}px`;
    menu.style.top = `${y}px`;

    let windowWidth = window.innerWidth;
    let menuWidth = menu.offsetWidth;

    let windowHeight = window.innerHeight;
    let menuHeight = menu.offsetHeight;

    let shareMenuWidth = shareMenu.offsetWidth;

    (x>windowWidth-menuWidth)? menu.style.left = `${windowWidth-menuWidth}px`: menu.style.left = `${x}px`;
    (y>windowHeight-menuHeight)?menu.style.top = `${windowHeight-menuHeight}px`: menu.style.top = `${y}px`;


    (x>windowWidth-(menuWidth+shareMenuWidth)?shareMenu.style.left='-200px':shareMenu.style.left='',shareMenu.style.right='-200px')
})