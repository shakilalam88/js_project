const gallery = document.querySelectorAll('.image');
console.log(gallery);
const wrapper = document.querySelector('.wrapper')

window.onload = () => {
    for (let i = 0; i < gallery.length; i++) {
        gallery[i].onclick = () => {
            let htmlNode = `<div class="preview-box">
                                <div class="details">
                                    <span class="icon">X</span>
                                </div>
                                <div class="image-box">
                                    <img src="" alt="">
                                </div>
                            </div>
                            <div class="shadow"></div>`;
            wrapper.insertAdjacentHTML("afterend", htmlNode)
            const previewBox = document.querySelector('.preview-box')
            const previewImg = previewBox.querySelector('img')
            const closeIcon = previewBox.querySelector('.icon')
            const shadow = document.querySelector('.shadow');
            console.log(i);
            function preview() {
                let selectedImgUrl = gallery[i].querySelector('img').src;
                previewImg.src = selectedImgUrl;
                console.log(selectedImgUrl);
            }
            preview()
            previewBox.classList.add("show")
            shadow.style.display = "block"
            closeIcon.onclick = () => {
                previewBox.classList.remove("show")
                shadow.style.display = "none"
            }
        }
    }
}



// ======================================================second method============================


// const gallery = document.querySelectorAll('.gallery .image');
// console.log(gallery);
// const previewBox = document.querySelector('.preview-box')
// const previewImg = previewBox.querySelector('img')
// const closeIcon = previewBox.querySelector('.icon')
// const shadow = document.querySelector('.shadow')
// console.log("shakil",shadow);

// window.onload = () => {
//     for (let i = 0; i < gallery.length; i++) {
//         gallery[i].onclick = () => {
//             console.log(i);
//             function preview() {
//                 let selectedImgUrl = gallery[i].querySelector('img').src;
//                 previewImg.src = selectedImgUrl;
//                 console.log(selectedImgUrl);
//             }
//             preview()
//             previewBox.classList.add("show")
//             shadow.style.display = "block"
//             closeIcon.onclick = () => {
//                 previewBox.classList.remove("show")
//                 shadow.style.display = "none"
//             }
//         }
//     }
// }