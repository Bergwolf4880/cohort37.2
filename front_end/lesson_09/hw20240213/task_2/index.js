// ## Задание 2.
// Объвить массив из 10 любых, заполнить.
// Вырезать первый элемент и добавить его в конец массива.

const array = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 100));

}

const firstEl = array.shift();
array.push(firstEl);
console.log(array);