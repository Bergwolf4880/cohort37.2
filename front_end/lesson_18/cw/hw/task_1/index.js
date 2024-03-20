// Написать функцию, которая принимает на вход массив имен и возвращает массив имен,
//  начинающихся на букву "а" (большую или маленькую).

const names =
   ["Bob", "Chris", "David", "Eva", "Frank", "Grace",
      "Helen", "Ian", "Jack","Alex", "Kate", "Leo", "Max", "Nora", "Oscar"];


const filteredNamesOld = (array) => {
return array.filter(element => element[0].toLowerCase().includes('a'));

}



const checkFirstAchar = string => string.toLowerCase().startsWith('a')

const filteredNames = (array) => {
return array.filter(checkFirstAchar);
}

console.log(filteredNames(names));