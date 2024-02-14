// ## Задание 4. Простые числа в заданном промежутке

// Нужно создать две функции.

// Первая функция должна принимать число и возвращать результат булевого типа - является ли число простым, или нет. Число является простым, если оно делиться без остатка только на 1 и само на себя.
// Первая функция не должна быть колбеком, просто рядом лежать, или даже внутри второй функции. На ваш выбор.

// Вторая функция должна вернуть в виде массива все простые числа в промежутке от 1 до n, где n - первый аргумент функции.
// Вторая функция должна пользоваться первой функцией для определения простых чисел.



let num = 17;
let array = simpleNumSum(num);

console.log(array);

let nums = isSimple(num) ?  console.log(`Number ${num} is a simple number`) 
                            : console.log(`Number ${num} is not a simple number`);




function isSimple(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2)
        if (num % i === 0) return false;
    return true;
}


function simpleNumSum(num) {
    let temp = [];
    for (let i = 2; i < num; i++) {
        if (isSimple(i)) {
            temp.push(i);
        }
    }
    return temp;
}
