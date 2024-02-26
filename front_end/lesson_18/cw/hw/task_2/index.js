// Написать функцию, которая принимает на вход массив числе и возвращает их сумму. 
// Если получится использовать метод reduce - будет здорово. Завтра его рассмотрим.

const numbers = [1,2,3,4,5,6,7,8,9];

function sumAllNumbers(arr){
    return arr.reduce((i, j) => i+j);}

console.log(sumAllNumbers(numbers));
