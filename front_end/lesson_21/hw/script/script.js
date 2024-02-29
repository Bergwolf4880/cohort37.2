const randomNumberGeneratorBtn = document.querySelector('#btn');
const resultOutput = document.querySelector('#res');


const randomNumber = () => {
    return new Promise(
        (callBackWin, callBackLose) => {
            
            const decision = () =>{
            let randomNumber = Math.round(Math.random() * 100);
            if (randomNumber > 70) {
                console.log(randomNumber);
                callBackWin(`Ура, ты выиграл. ${randomNumber}`);
            } else {
                callBackLose(`Попробуй ещё ${randomNumber}`);
            }
        }
        randomNumberGeneratorBtn.addEventListener('click', decision);
        }
    )
}


randomNumber().then(argum => {
    resultOutput.textContent = argum;
    randomNumberGeneratorBtn.textContent = '';
    
}).catch(Error => {
    resultOutput.textContent = Error;
    randomNumberGeneratorBtn.textContent = '';
})




