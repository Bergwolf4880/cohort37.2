const nums = [2, 3, 4, 5, 6, 7, 8];



function evenOdd (nums){
    const arr = nums.map((num) => {
        if (nums % 2 === 0) {
            return num;
        } else{
            return num*2;
        }
    })
    return arr;
}
const newArr = evenOdd1(nums);
function evenOdd1 (nums){
    return nums.map(num => num % 2 === 0 ? num : num*2);}
 


    
console.log(newArr);