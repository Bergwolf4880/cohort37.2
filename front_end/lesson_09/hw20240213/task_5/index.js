// ## Задание 5.
// Объявить массив из 5 элементов и заполнить его любыми числами.
// Присвоить 5 переменным значения из массива с помощью деструктуризации.

<<<<<<< HEAD
const array = [1,2,3,4,5];
=======
const array = [];
>>>>>>> lesson_09
for (let i = 0; i < 5; i++) {
    array.push(Math.floor(Math.random() * 100));
}
let[a,b,c,d,e] = array;
console.log(a,b,c,d,e);