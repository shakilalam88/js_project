// let galleryImg = document.querySelectorAll('.gallery .images')
// let popupImg = document.querySelector('.popup .popupImage img')
// let popup = document.querySelector('.popup');




// window.onload = () => {
//     for (let i = 0; i < galleryImg.length; i++) {
//         galleryImg[i].onclick = () => {
//             let shadow = document.querySelector('.shadow');
//             let close = document.querySelector('.close');
            
//             function abc(){

//                 let imgUrl = galleryImg[i].querySelector('img').src
//                 popupImg.src = imgUrl
//             }
//             abc()
//             popup.style.opacity = "1";
//             shadow.style.display = 'block'
//             close.onclick = () => {
//                 popup.style.opacity = '0'
//                 shadow.style.display = 'none'
//             }
//         }
//     }
// }


const popup = document.querySelector('.popup')
const galleryImg = document.querySelectorAll('.gallery img');
console.log(galleryImg);
const popupImg = document.querySelector('.full-img');
const caption = document.querySelector('.caption')



galleryImg.forEach((preview)=>{
    preview.addEventListener('click',()=>{
        console.log(preview.alt);
        popup.classList.add('open')
        popupImg.classList.add('open')
        popupImg.src = preview.src
        caption.innerHTML = preview.alt
    })
})
popup.addEventListener("click",(e)=>{
    console.log(e);
    if(e.target.classList.contains("popup")){
        popup.classList.remove("open")
        // popupImg.classList.remove('open')
    }
})