// ## Задание 4.
// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100.
// Найти сумму всех элементов массива. Вывести в консоль.

const array = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 100));
}
let sum = 0;
for (let i = 0; i < array.length; i++) {

    sum += array[i];
}

console.log("Array: " + array);
console.log("Sum of all elements: " + sum);