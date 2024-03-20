/*function ex2(a, f){
    return f(a);
}
console.log(ex2(13.12331), Math.ceil);*/

var theNumber = prompt("Выбери число ", "");
if (!isNaN(theNumber))
alert("Твоё число – квадратный корень из " + theNumber * theNumber);