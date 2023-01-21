// method 1---------------------

let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");


btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const style = e.currentTarget.classList;
        if(style.contains("decrease")){
            count--;
        }else if(style.contains('increase')){
            count++;
        }else{
            count = 0;
        }
        value.textContent = count;
        if(count>0){
            value.style.color = 'green';
        }else if(count<0){
            value.style.color = 'red';
        }else{
            value.style.color = 'black';
        }
    })
})


//method 2------------------------

// const value = document.getElementById('value');
// const increase= document.querySelector(".increase");
// const reset= document.querySelector(".reset")
// const decrease= document.querySelector(".decrease")

// let count = 0;
// increase.addEventListener('click',function(){
//     count++;
//     value.innerHTML = count;
//     value.style.color = 'green';
// });

// decrease.addEventListener('click',function(){
//     count--;
//     value.innerHTML = count;
//     value.style.color = 'red';
// });

// reset.addEventListener('click',function(){
//     count = 0;
//     value.innerHTML = count;
//     value.style.color = 'black';
    
// });
