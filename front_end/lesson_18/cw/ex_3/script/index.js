
// __proto__ ihneritance

const human = {
    height: 180,
    weight: 80,
    sing() {
        console.log('I am');
    }
}

const player = {
    result: 2.5,
    __proto__: human
}

// for(let property in player){
//     console.log(property);
// }

// for (let property in player) {
//     if(player.hasOwnProperty(property)){
//         console.log("player "+property);
//     } else {
//         console.log("human "+property);
//     }
// }

const names = ["Alex", "Bob", "Chris", "David", "Eva", "Frank", "Grace", "Helen", "Ian", "Jack", "Kate", "Leo", "Max", "Nora", "Oscar"];


function hasLetter(names){
const letters = [];
names.filter((name) => {
if(name.includes('a')||name.includes('A')){
  letters.push(name)  
}})
return letters;
};

console.log(hasLetter(names));





// console.log(player.hasOwnProperty('result'));





// console.log(player.toString===human.toString);

// getter&setter

// const playerJohn = {
//     name: "John",
//     surname: "Doe",
    
//     get fullName() {
//         return `${this.name} ${this.surname}`
//     },

//     set fullName(value) {
//         const [firstName, lastName] = value.split(' ');
//         this.name = firstName;
//         this.surname = lastName;
//     }
// }

// playerJohn.fullName = 'Johnny Depp'

// console.log(playerJohn.fullName);

// //установка прототипа

// Object.setPrototypeOf(player, human);
// console.log(player);