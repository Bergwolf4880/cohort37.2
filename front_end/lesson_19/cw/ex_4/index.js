class Human {
    #fName;
    #lName;


    constructor(fName, lName) {
        this.#fName = fName;
        this.#lName = lName;

    }
}

const john = new Human('John', 'Doe');

john.fName = "Carl";
console.log(john);