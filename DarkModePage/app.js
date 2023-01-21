const  icon = document.getElementById('icon');
const hero = document.querySelector('.hero');
console.log(icon);

icon.addEventListener('click',()=>{
    hero.classList.toggle('dark-theme');
    hero.classList.contains('dark-theme')?icon.src = 'image/sun.png':icon.src = 'image/moon.png';
})

const loader = document.getElementById('preloader')
window.addEventListener('load',()=>{
    loader.style.display = 'none'
})