
const sum = function (a, b) {         // Function expression - Lower priority
    return a + b;                     // функция может быть использована только после объявления 
}                                     // переменной в которой будет сохранён её результат


function sumA() {                    // Function declaration - Higher priority
    return (a + b);
}


const resultSum = sum(1, 5);
//console.log(resultSum);


// ////////////////////////////////////


// const sumArr = (a, b) => {

//     console.log("LoL")
//     return a+b;
// }

// const temp = sumArr(5, 3);

// console.log(temp);


const sumArr = (a, b) => a + b;
const pow = a => a ** a;              //const pow = (a) => {a ** a};  полный синтаксис записи

console.log(pow(3));

const print = () => "hello";




