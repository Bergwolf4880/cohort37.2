const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const arrPlusTwo = (array) => {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr[i] = array[i] += 2;
    }
    return newArr;
}

//console.log(arrPlusTwo(arr));


const newArrMap0 = arr.map((elem) => { return elem + 2 });
const newArrMap1 = arr.map((elem, i) => { return elem + i });

//console.log(newArrMap1);


const newArrMap2 = arr.map((elem) => { return elem ** 2 })

function arrMap(elem, i) {
    return elem + i;
}



const newArrMap = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(

    arrMap
);

// console.log(newArrMap);

function evenOdd(element) {
    return(element % 2 === 0) ? element / 2 : element*3;
}

const newArrEqOdd = [1, 2, 3, 5, 7, 11, 18, 22, 17, 21].map(
evenOdd
)

console.log(newArrEqOdd);

const sortedArr = arr.sort(
(a, b) => {
    if( a < b ){
        return -1; 
    }
    if(a > b){
        return 1;
    }
    else return 0;
}
)

