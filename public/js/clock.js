var minutesLabel = document.getElementById("minutes")
var secondsLabel = document.getElementById("seconds")
var interval = null
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function countTimeDeserved() {
    // Each question has 30" 
    let questions = getAllQuestionBlocks()
    return questions.length * 30
}

window.onload = function () {
    var time = countTimeDeserved(),
        display = document.querySelector('#time');
    startTimer(time, display);
};