// Написать функцию, которая сравнит 2 объекта и вернет true, если они идентичны, 
// иначе false. Объекты считаются идентичными, если они содержат одинаковое количество свойств, 
// названия и значения всех свойств совпадают.

const car1 = {
    brand: "BMW",
    year: 2019,
    model: 320
};
const car2 = {
    brand: "BMW",
    year: 2019,
    model: 530
};
const car3 = {
    brand: "BMW",
    year: 2019,
    model: 530
};


// function isEql(car1, car2) {
//     return JSON.stringify(car1) === JSON.stringify(car2)
// };

// console.log(isEql(car1, car2)); //false
// console.log(isEql(car3, car2)); //true



const objectComparator1 = (car1, car2) => {
    const key1 = {};
    const key2 = {};
    key1 = Object.keys(car1);
    key2 = Object.keys(car2);


    if (key1.length !== key2.length) {
        return false;
    }
    for (let key of key1) {
        if (!key2.includes(key) || !objectComparator1(car1[key], car2[key])) {
            return false;
        }
    }
    return true;  // к сожалению выдаёт Stack owerflow
}



const objectComparator2 = (car1, car2) => 
    Object.keys(car1).length === Object.keys(car2).length && Object.keys(car1).every(key => 
                car2.hasOwnProperty(key) && (typeof car1[key] === 'object' && car1[key] !== null ? 
                     objectComparator2(car1[key], car2[key]) : car1[key] === car2[key]));


                    
console.log(objectComparator1(car1, car2)); // false
console.log(objectComparator1(car3, car2)); // true