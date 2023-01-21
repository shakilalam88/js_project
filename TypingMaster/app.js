

// const typingText = document.querySelector('.typing-text p');
// const inputField = document.querySelector('.input-field');
// const timeTag = document.querySelector('.time span b')
// const mistakeTag = document.querySelector('.mistake span');

// let charIndex =0;
// let mistake = 0;
// let timer,maxTime = 60
// let timeLeft = 0;

// function randomParagraph(){
//     let randIndex = Math.floor(Math.random()*paragraphs.length);
//     paragraphs[randIndex].split('').forEach((span)=>{
//         let spanTag =`<span>${span}</span>`;
//         typingText.innerHTML += spanTag
//     })
//     document.addEventListener('keydown',()=>{
//         inputField.focus()
//     })
//     document.addEventListener('click',()=>{
//         inputField.focus()
//     })
// }
// function initTyping(){
//     const characters = typingText.querySelectorAll('span');
//     let typedChar = inputField.value.split('')[charIndex];
//     timer = setInterval(initTimer,1000);
//     if(typedChar == null){
//         charIndex--;
//         if(characters[charIndex].classList.contains('incorrect')){
//             mistake--;
//         }
//         characters[charIndex].classList.remove('correct','incorrect')
//     }else{

//         if(characters[charIndex].innerHTML === typedChar){
//             characters[charIndex].classList.add('correct')
//         }else{
//             mistake++;
//             characters[charIndex].classList.add('incorrect')
//         }
//         charIndex++;
//         characters.forEach((span)=>{
//             span.classList.remove('active')
//         })
//         characters[charIndex].classList.add('active');
//         mistakeTag.innerHTML = mistake;
//     }
// }
// function initTimer(){
//     if(timeLeft>0){
//         timeLeft--;
//         timeTag.innerHTML = timeLeft
//     }else{
//         clearInterval(timer)
//     }
// }
// randomParagraph()

// inputField.addEventListener('input',initTyping);



const typingText = document.querySelector(".typing-text p"),
inpField = document.querySelector(".wrapper .input-field"),
tryAgainBtn = document.querySelector(".content button"),
timeTag = document.querySelector(".time span b"),
mistakeTag = document.querySelector(".mistake span"),
wpmTag = document.querySelector(".wpm span"),
cpmTag = document.querySelector(".cpm span");

let timer,
maxTime = 60,
timeLeft = maxTime,
charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if(charIndex < characters.length - 1 && timeLeft > 0) {
        if(!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if(typedChar == null) {
            if(charIndex > 0) {
                charIndex--;
                if(characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if(characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes)  / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        
        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }   
}

function initTimer() {
    if(timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes)  / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);