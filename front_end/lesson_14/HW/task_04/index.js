// Напишите функцию, которая принимает объект и возвращает другой обьект, 
// который содержит все свойства исходного обьетка, но значения свойств - это их типы.
// Пример:
// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: 'string', '36.6': 'number', 'John Doe': 'string' }

function typeOfValue(obj) {
    let temp = {};
    for (i in obj) {
        temp[i] = typeof obj[i];
    }
    return temp;
}



let obj = { a: 'a1', '36.6': 36.61, 'John Doe1': 'John Doe1' };
console.log(typeOfValue(obj));



// Напишите функцию, которая принимает объект и возвращает другой более сложный обьект, 
// который содержит все свойства исходного обьетка,
//  но значения свойств - это объект содержащий исходное значение, и его тип. Пример:

// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 
// { a: { value: 'a', type: 'string' }, '36.6': { value: 36.6, type: 'number' }, 
// 'John Doe': { value: 'John Doe', type: 'string' } }

function typeOfValue1(obj) {
    let temp = {};
    
    for (i in obj) {
        temp[i] = {value : obj[i], type: typeof obj[i]}
    }
    return temp;
}


let obj1 = { a: 'a1', '36.6': 36.61, 'John Doe1': 'John Doe1' };
console.log(typeOfValue1(obj));
