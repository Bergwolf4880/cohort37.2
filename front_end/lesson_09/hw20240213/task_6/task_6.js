// ## Задание 6.
// Разбить строку 
// ```angular2html
// Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая  кислота.
// ```
// на слова и вывести в консоль по одному слову в строке.

const str = "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.";

let temp = "";
for (let i = 0; i < str.length; i++) {
    if (str[i] != "," && str[i] != ":" && str[i] != ".") {
        temp += str[i];
    }
}
let res = temp.split(" ");
for(let i = 0; i<res.length;i++){
    console.log(res[i]);
}


