// Class & Constructor

class Player {

    constructor(name, weight, height, result) {
        this.height = height;
        this.weight = weight;
        this.result = result;
        this.name = name;
    }
    makeGoal(){
        console.log("Goal!");
    }
}



const playerJohn = new Player("John", 88, 180, 3.5);

const playerMike = new Player("Mike", 95, 190, 3);


//console.log(playerJohn.scoreGoal === playerMike.scoreGoal);
console.log(playerJohn);


class ChessPlayer extends Player{

    constructor(name,weight,height, speed){
        super(name,weight,height)
        this.speed = speed
    }

    makeTurn(){
        console.log("It's my turn");

    }
    makeGoal(){
        console.log("Checkmate");
        console.log("Falling");
    }

    static theBestPlayer(chessPlayer1, chessPlayer2){
        return chessPlayer2.speed < chessPlayer1.speed ? chessPlayer2 : chessPlayer1;
    }

}
const harry = new ChessPlayer('Harry', 78, 175, 3);
const karlsson = new ChessPlayer('Magnus', 78, 180, 2); 

console.log(ChessPlayer.theBestPlayer(harry, karlsson));4

// // Методы объекта и класса JS
// [1,2].forEach();
// [1,2].length;

// Array.isArray();
// Object.keys(obj);


