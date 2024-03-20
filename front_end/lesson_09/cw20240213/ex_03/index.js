const array = [1,2,3,"e", 5, 6, 7];

// let i = 0;
// while( i< array.length);

const sentence = "today, we learn, loops";

// console.log(sentence.length);
// console.log(sentence.toLowerCase);
// console.log(sentence.toUpperCase);
// console.log(sentence[1]);

// console.log(sentence.split(','));
// console.log(sentence.substring(0,5)) // 
const temp1 = sentence.replaceAll(',','');
const temp2 = temp1.split(' ');

// console.log(temp2);
 
let newSentences = '';

for(let i = 0; i < sentence.length; i++){
    if(sentence[i] !==  ","){
        newSentences += sentence[i];
    }
}

console.log(newSentences);

// for(let i = 0; i<sentence.length; i++){
//     if(i===','){

//     }
// }

