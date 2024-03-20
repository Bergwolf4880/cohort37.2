// Написать функцию, которая принимает масив чисел, и возвращает среднее арифметическое
// Использовать reduce и в прниципе можно любой другой метод массива

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function average(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    return sum / nums.length;
}

const average2 = (nums) => nums.reduce((a, b) => a + b)/nums.length;

console.log(average2(nums));