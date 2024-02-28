
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', startCountdown);


let countdown;
let countdownDisplay;

function startCountdown() {
    const timeInput = document.getElementById('time');
    let time = timeInput.value;
    countdownDisplay = document.getElementById('countdown');
    clearInterval(countdown);
    countdown = setInterval(function() {
        if(time <= 0) {
            clearInterval(countdown);
            countdownDisplay.textContent = 'Время вышло';
        } else {
            countdownDisplay.textContent = time + ' секунд осталось';
        }
        time--;
    }, 1000);
}