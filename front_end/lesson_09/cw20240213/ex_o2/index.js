const array = [1,2,3,"e", 5, 6, 7];

// for(let i=0; i < array.length; i++ ){
//     console.log(array[i]);
// }


// for(let i=array.length-1; i >= 0; i-- ){
//     console.log(array[i]);
// }

const arrSecond = [];

for(let i=array.length-1; i >= 0; i-- ){
    arrSecond.push(array[i]);
}
console.log(arrSecond);

const sArr = [1,2,3,4,5,6,7];

//const[d,e,f] = sArr;        // !!! присвоение к переменным элементы массива
const[l,m,...n] = sArr;        // !!! присвоение к переменным элементы массива



const a = sArr[0];
const b = sArr[1];
const c = sArr[2];

console.log(a,b,c);

const copyArr = [...sArr]; // создаёт копию массива, а не копию ссылки на него !!!

copyArr[0] = "A";

console.log(sArr);
console.log(copyArr);
console.log(n);
//console.log(b,y,...sArr)

