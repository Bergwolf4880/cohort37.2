// Функция должна принимать объект и возвращать строку, где будут перечислены все значения свойств объекта через запятую.
// Пример работы функции:

// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 'a, 36.6, John Doe'
let obj = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };

function objToStr(obj) {
    let str = "";
    
    for (i in obj) {
        str += i+", ";
    }
    return str;
}

function objToStr2(obj){
    let value = Object.values(obj);
    return value.join(', ');
}


const functionGetValuesInStzring = (obj) => { Object.values(obj).join(' ');}

functionGetValuesInStzring(obj);



// console.log(objToStr(obj));
// console.log(objToStr2(obj));



