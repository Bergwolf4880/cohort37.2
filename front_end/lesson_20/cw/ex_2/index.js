const pressButton = document.querySelector('button');

pressButton.addEventListener('click', () => { console.log("click and lick") });



// const takeTime = () => {
//     let sum = 0;
//     console.log("Start counting");
//     const startTime = Date.now();
//     for (let i = 0; i < 10000000000; i++) {
//         sum += i;
//     }
//     const endTime = Date.now();
//     console.log("Finished counting "+((endTime - startTime)/1000));
// }

// takeTime();

const printHelloToConsole = () => {
    console.log("Alloha");
}


const checkTimeout = () => {
    console.log('1');
    setTimeout(() => { console.log('2') }, 0)
    console.log('3');
    setTimeout(() => { console.log('4') }, 2000)
    console.log('5');
    setTimeout(printHelloToConsole, 0)
    // console.log("From function");
}

// checkTimeout();

const checkInterval = () => {
    let count = 5;

    const funcInterval = () => {
        console.log('Interval ');
        count -= 1;
        if (count <= 0) {
            clearInterval(idI);
        }

    }
    // const funcInterval = () =>{console.log("Interval");}
    const idI = setInterval(funcInterval, 1000);

    // setTimeout(()=>{clearInterval(idI)},5000)

}
checkInterval();