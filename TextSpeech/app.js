const textArea = document.querySelector('textarea');
const speechBtn = document.querySelector('button');
const voiceList = document.querySelector('select');

let synth = speechSynthesis;
let isSpeeking = true;

function voices(){
    for(let voice of synth.getVoices()){
        let selected = voice.name === "Google Us English"?"selected":"";
        let option = `<option value="${voice.name}" ${selected}>${voice.name}(${voice.lang})</option>`;
        voiceList.insertAdjacentHTML('beforeend',option)
    }
}

synth.addEventListener('voiceschanged',voices);

function textSpeech(text){
    let speech = new SpeechSynthesisUtterance(text);
    for(let voice of synth.getVoices()){
        if(voice.name === voiceList.value){
            speech.voice = voice;
        }
    }
    synth.speak(speech)
}

speechBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(textArea.value !== ''){
        if(!synth.speaking){
            textSpeech(textArea.value)
        }
        if(textArea.value.length>80){
            if(isSpeeking){
                synth.resume();
                isSpeeking = false;
                speechBtn.innerText = 'Pause Speech';
            }else{
                synth.pause();
                isSpeeking = true;
                speechBtn.innerText = 'Resume Speech'
            }
        }
    }
})