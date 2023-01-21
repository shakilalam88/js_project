//date------------
const year = new Date().getFullYear();
document.getElementById("date").innerHTML = year;

//close link-------------
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function(){
    linksContainer.classList.toggle("show-links");
    const contanierHeight = linksContainer.getBoundingClientRect().height;
    console.log(contanierHeight);
    const linksHeight = links.getBoundingClientRect().height;

    if(contanierHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
})
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
console.log(topLink);


//fixed navbar-----------------
window.addEventListener('scroll',function(){
    const scrollHeight = window.pageYOffset;
    console.log(scrollHeight);
    const navbarHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navbarHeight){
        navbar.classList.add('fixed-nav');
    }else{
        navbar.classList.remove('fixed-nav');
    }
    if(scrollHeight>500){
        topLink.classList.add("show-link");
    }else{
        topLink.classList.remove("show-link");
    }
})
