// ## Задание 1. 
// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100.
// Найти максимальное и минимальное значение в массиве.
// Вывести в консоль.

const array = [];

for (let i = 0; i < 10; i++) {
array.push(Math.floor(Math.random()*100));

}
console.log('Max random number: '+(Math.max(...array)));
console.log('Min random number: '+(Math.min(...array)));

console.log(array);


