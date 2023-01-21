// let seconds = document.getElementById('seconds');
// let tens = document.getElementById('tens');
// let button_start = document.getElementById('button-start');
// let button_stop = document.getElementById('button-stop');
// let button_reset = document.getElementById('button-reset');

// let sec = 0;
// let mili = 0;
// let timer = false;

// button_start.addEventListener('click',function(){
//     timer = true;
//     startTimer();
// })

// button_stop.addEventListener('click',function(){
//     timer = false;
// })

// button_reset.addEventListener('click',function(){
//     timer = false;
//     sec = 0;
//     mili = 0;
//     seconds.innerHTML = sec;
//         tens.innerHTML = mili
// })

// function startTimer(){
//     if(timer==true){
//         mili = mili+1;
//         if(mili==100){
//             mili = 0;
//             sec= sec+1;
//         }
//         seconds.innerHTML = sec;
//         tens.innerHTML = mili
//         setTimeout("startTimer()",10)
//     }
    
// }




window.onload = function () {
  
    let sec = 00; 
    let milisec = 00; 
    let miliSeconds = document.getElementById("miliSeconds")
    let seconds = document.getElementById("seconds")
    let buttonStart = document.getElementById('button-start');
    let buttonStop = document.getElementById('button-stop');
    let buttonReset = document.getElementById('button-reset');
    let Interval ;
  
    buttonStart.onclick = function() {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    buttonStop.onclick = function() {
        clearInterval(Interval);
    }
     
    buttonReset.onclick = function() {
       clearInterval(Interval);
      miliSeconds.innerHTML = '00';
        seconds.innerHTML = '00';
    }
     
    function startTimer () {
      milisec++; 
      
      if(milisec <= 9){
        miliSeconds.innerHTML = "0" + milisec;
      }
      
      if (milisec > 9){
        miliSeconds.innerHTML = milisec;
        
      } 
      
      if (milisec > 99) {
        sec++;
        seconds.innerHTML = "0" + sec;
        milisec = 0;
        miliSeconds.innerHTML = "0" + 0;
      }
      
      if (sec > 9){
        seconds.innerHTML = sec;
      }
    }
}