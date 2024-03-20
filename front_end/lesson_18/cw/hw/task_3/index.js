// Написать функцию, которая принимает на вход массив чисел и возвращает 
// массив из тех же элементов, но в обратном порядке.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function reverseArr(arr) { return arr.reverse(); }



function reverseArr1(arr) {
    const temp = [];
    for (let i = arr.length-1; i >= 0; i--) {
        temp.push(arr[i])
    }
    return temp;
};



console.log(reverseArr1(numbers));
console.log(reverseArr(numbers));