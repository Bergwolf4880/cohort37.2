// Написать функцию, которая принимает на вход массив имен и возвращает массив имен,
//  начинающихся на букву "а" (большую или маленькую).

const names = 
["Alex", "Bob", "Chris", "David", "Eva", "Frank", "Grace", 
"Helen", "Ian", "Jack", "Kate", "Leo", "Max", "Nora", "Oscar"];


const filteredNames = (array) => {

return array.filter( element => element[0].toLowerCase().includes('a'));

}

console.log(filteredNames(names));