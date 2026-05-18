// Select display
const display = document.getElementById("display");

// Select buttons
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

// Variables
let startTime = 0;
let elapsedTime = 0;
let timer = null;

// Function to update stopwatch
function stopwatch(){

    elapsedTime = Date.now() - startTime;

    let totalSeconds = Math.floor(elapsedTime / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    // Format numbers
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    // Update display
    display.innerHTML = `${m} : ${s} : ${ms}`;

}

// Start button
startBtn.addEventListener("click", function(){

    if(timer !== null){
        clearInterval(timer);
    }

    startTime = Date.now() - elapsedTime;
    timer = setInterval(stopwatch, 10);

});

// Pause button
pauseBtn.addEventListener("click", function(){

    clearInterval(timer);
    timer = null;

});

// Reset button
resetBtn.addEventListener("click", function(){

    clearInterval(timer);
    timer = null;

    startTime = 0;
    elapsedTime = 0;

    display.innerHTML = "00 : 00 : 00";

});