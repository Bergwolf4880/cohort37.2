// 1. Получает число и возвращает это число умноженное на 2. Функція называется double.
// 2. Получает число и возвращает квадрат числа. Называется PowMe
// 3. Получает число, если четное умножает на 2 и возвращает результат. Если не четное возвращает квадрат.





let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function double(num) {
    return num * 2;
}

function powMe(num) {
    return num ** 2;
}

function evenOdd(num) {
    if (num % 2 === 0) {
        return double(num);
    } else {
        return powMe(num);
    }
}

console.log(evenOdd(2));


