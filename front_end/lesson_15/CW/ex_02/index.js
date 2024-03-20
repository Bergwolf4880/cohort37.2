const arr = [1, 2, 3, 5, 7, 11, 18, 22, 17, 21];


const newForE = [];
arr.forEach(
    (element) => {
        if (element > 17) {
            newForE.push(element);
        }
    }
)



 let temp = 0; //// Почему так не работает ?

let summ = arr.forEach((element) => {temp += element;});


console.log(temp);
