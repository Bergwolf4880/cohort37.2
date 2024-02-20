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

function arrToObj(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        let el1 = array[i][0];
        let el2 = array[i][1];
        obj[el1] = el2;
    }
    return obj;
}


// for(i in toDoArr){
//     console.log(toDoArr[i]);
// }



const array = [
    ['height', 170],
    ['weight', 80],
    ['sport', 'regbi'],
    ['full name', 'John Doe'],
    ['sing', 'love'],
    ['speed', 90]
]

console.log(arrToObj(array));