// Напишите фукнцию, которая будет принимать массив. Массив может содержать любые строки и числа. Функция должна вернуть объект,
//  который содержит свойства, ключ и значение которых равны соответствующему элементу массива. Пример работы функции:
// ['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }

let array = ['a', 36.6, 'John Doe'];
let tempObj = {};

function toObj(arr){
  
for (let i = 0; i < arr.length; i++) {
    tempObj[arr[i]] = arr[i];
  }
   return tempObj;
}

array.forEach ((element) => { tempObj[element]= element})



//console.log(toObj(array));
console.log(tempObj);

