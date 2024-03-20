// const sum = (a, b) => a + b;
// const sumBackup = (a = 2, b = 2) => a + b;         // default arguments,если аргумент отсутствует, то будет использова параметр по умолчанию

// const sumResult = sum(2);                          // Нехватает параветров, вернёт NaN

// const multiply = (a = 1, b = 1) => a * b;
// const pow = (a = 1, b = 1) => a ** b;

// const universal = (a, b, f) => {                      // Callback funktion
//     return f(a, b);
// }

// console.log(universal(2, 2, pow));                 // Callback funktion

// console.log(universal(4,2, (a,b)=>a/b));              // Callback short version

///////////////

// helloCallback(" ", hello);


const helloCallback = (names , f) => f(names);


let names = "Vitaly"
let f = hello;

const res = helloCallback(names, f );


// console.log(helloCallback(names, f ));


function hello(names){
    //return "Hello " + names;     // Java
      return `Hello ${names}`;     // JavaScript
}



// const str2 = hello("Мишель ", str => "Привет "+ str);
 const str2 = hello("Мишель ", str => `Hello ${names}`);