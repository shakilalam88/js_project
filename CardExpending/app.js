const container = document.querySelector('.container')
const panel = document.querySelectorAll('.panel');

panel.forEach((e)=>{
    e.addEventListener('click',()=>{
        removeActiveClass()
        e.classList.add('active')
    })
})

function removeActiveClass(){
    panel.forEach((e)=>{
        e.classList.remove('active')
    })
}