// Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух 
// элементов, в объект. Первый элемент каждого внутреннего массива ключ, второй - значение.
// Например такой:
// [
//   [ 'height', 170 ],
//   [ 'weight', 80 ],
//   [ 'sport', 'regbi' ],
//   [ 'full name', 'John Doe' ],
//   [ 'sing', 'love' ],
//   [ 'speed', 90 ]
// ]
const array = [
    ['height', 170],
    ['weight', 80],
    ['sport', 'regbi'],
    ['full name', 'John Doe'],
    ['sing', 'love'],
    ['speed', 90]
]

let obj = {};

function arrToObj(array) {
  
    for (let i = 0; i < array.length; i++) {
        let el1 = array[i][0];
        let el2 = array[i][1];
        obj[el1] = el2;
    }
    return obj;
}

//console.log(arrToObj(array));
// for(i in toDoArr){
//     console.log(toDoArr[i]);
// }

array.forEach((element) => {obj[element[0]] = element[1]});

console.log(obj);

