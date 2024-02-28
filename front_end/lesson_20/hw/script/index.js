const userInputTime = document.querySelector('#input_field');
const startButton = document.querySelector('#start');
const countdownMonitor = document.querySelector('#countdown_monitor');

let inputValue;

const coundownClock = () => {
    const funcInterval = () => {
        countdownMonitor.textContent = inputValue;
        inputValue -= 1;
        if (inputValue <= -1) {
            clearInterval(idI);
            countdown_done.play();
            countdownMonitor.textContent = "Time's out";
            countdownMonitor.classList.add('blink');

            setTimeout(() => {
                countdownMonitor.textContent = '';
                userInputTime.value = '';
                countdownMonitor.classList.remove('blink');
            }, 5000);
        }        
                
    }
    const idI = setInterval(funcInterval, 1000);
};

const inputHandler = (evt) => {
    inputValue = evt.target.value;
    countdownMonitor.textContent = inputValue;

};

userInputTime.addEventListener('input', inputHandler);
startButton.addEventListener('click', coundownClock);
