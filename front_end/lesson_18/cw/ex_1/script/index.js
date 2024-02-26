
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
    // __proto__: human
}

// console.log(player.toString===human.toString);

// getter&setter

const playerJohn = {
    name: "John",
    surname: "Doe",
    
    get fullName() {
        return `${this.name} ${this.surname}`
    },

    set fullName(value) {
        const [firstName, lastName] = value.split(' ');
        this.name = firstName;
        this.surname = lastName;
    }
}

playerJohn.fullName = 'Johnny Depp'

console.log(playerJohn.fullName);

//установка прототипа

Object.setPrototypeOf(player, human);
console.log(player);