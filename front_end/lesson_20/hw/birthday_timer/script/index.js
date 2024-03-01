const submitButton = document.querySelector('#submit');
const inputDate = document.getElementById("countdownDate");
const inputTime = document.getElementById("inputField");
const countdownDate = new Date(inputDate).getTime();

let inputValue;

console.log(inputTime);
console.log(inputTime);


// function setCountdown() {

//     switch (inputDate || inputTime) {                                 //TODO
//         case (inputDate && !inputTime): dateCountdown(); break;
//         case (!inputDate && inputTime): countdownTimer(); break;
//         default: alert("WTF?");
//     }
// }
function setCountdown() {
    if (inputDate.value && !inputTime.value) {
        dateCountdown();
    } else if (!inputDate.value && inputTime.value) {
        coundownClock(); // Fix typo: coundownClock -> countdownClock
    } else {
        alert("WTF?");
    }
}




function dateCountdown() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    setInterval(countdownTimer(days, hours, minutes, seconds), 1000);
}



const timeCountdown = () => {


    const funcInterval = () => {
        countdownTimer(0, 0, 0, inputValue)
        inputValue -= 1;

        if (inputValue <= -1) {
            clearInterval(idI);
        }
    }
    const idI = setInterval(funcInterval, 1000);
};



const countdownTimer = (d, h, m, s) => {

    if (d > 0) {
        document.getElementById("days").textContent = d;
    } else if (h > 0) {
        document.getElementById("hours").textContent = h;
    } else if (d > 0) {
        document.getElementById("minutes").textContent = m;
    } else if (s > 0) {
         document.getElementById("seconds").textContent = s;
    }

    // setTimeout(() => {
    //     countdownMonitor.textContent = '';
    //     userInputTime.value = '';
    //     countdownMonitor.classList.remove('blink');
    // }, 5000);
    // countdownMonitor.classList.add('blink');


}



const inputHandler = (evt) => {
    inputValue = evt.target.value;
    countdownMonitor.textContent = inputValue;

};


inputTime.addEventListener('input', inputHandler);
inputDate.addEventListener('input', inputHandler);
submitButton.addEventListener('click', setCountdown);
// функция которая отрабатывет отчёт часов/минут/секунд
// выводит на экран подходящие названия единиц времени.
