function setCountdown() {
    const inputDate = document.getElementById("countdownDate").value;
    const inputTime = document.getElementById("inputField").value;
    if (!inputDate&& !inputTime) {
        alert("Пожалуйста, выберите дату!");
        return;
    }

    const countdownDate = new Date(inputDate).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = countdownDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    setInterval(updateCountdown, 1000);
}

// функция которая отрабатывет отчёт часов/минут/секунд
// выводит на экран подходящие названия единиц времени.
