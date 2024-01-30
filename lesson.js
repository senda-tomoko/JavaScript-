var startButton;    
var stopButton;     
var resetButton;    
var showTime;       

var timer;             
var startTime;          
var elapsedTime = 0;    
var holdTime = 0;       

window.onload = function () {
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    resetButton = document.getElementById("reset");
    showTime = document.getElementById("time");
}

function start(){
    startTime = Date.now();

    measureTime();

    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
}

function stop(){
    
    clearInterval(timer);


    holdTime += Date.now() - startTime;

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}


function reset(){
    
    clearInterval(timer);

    
    elapsedTime = 0;
    holdTime = 0;
    showTime.textContent = "0:0:0:0";

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

function measureTime() {
    
    timer = setTimeout(function () {
        
        elapsedTime = Date.now() - startTime + holdTime;

       
       var milliseconds = Math.floor((elapsedTime / 100) % 10); 
       var seconds = Math.floor((elapsedTime / 1000) % 10); 
       var minutes = Math.floor((elapsedTime / (1000 * 60)) % 10);
       var hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 10); 

       showTime.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

       measureTime();
    }, 10);
}
