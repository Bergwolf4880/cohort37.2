const array = [1,2,3,"e", null,NaN];

// console.log(array[1]);
// console.log(array.length);             // выводит длину массива

// const testVar = array.push('last');    // добавляет элемент на последнее место и масвозвращает кол-во элементов

// const delLast = array.pop();            // удаляет последний элемент из массива  и так-же возвращает его значение
// console.log(delLast);

// const shiftedEl = array.shift();        // вызываем shift(), он удаляет первый элемент и возвращает его значение
// array.unshift("lol");                   // добавляет значение в массив на нулевой индекс, возвращает новую длину массива

const testVar = array.splice(1, 1, "1a");  // 


// console.log(testVar);
console.log(array);