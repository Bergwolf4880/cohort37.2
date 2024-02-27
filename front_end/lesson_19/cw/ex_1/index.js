const arr = [1, 5, [67, 78, 34], 12, 14];
let flatArr = [];

const arrUnpack = element => {
    if (Array.isArray(element)) {
        element.forEach(arrUnpack);
    } else {
        flatArr.push(element);
    }
}

function isArr(arr) {
    arr.forEach(arrUnpack);
    return flatArr;
}

console.log(isArr(arr));

console.log(...[arr]);

