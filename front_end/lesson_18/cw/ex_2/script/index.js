// Constructor

function Player(weight, height, result){
    this.height = height;
    this.weight = weight;
    this.result =  result;
    scoreGoal = function(){
        console.log('GOAL!!!')
    }
}
// Player.prototype.scoreGoal = function(){
//     console.log("Goal!!");
// }



const playerJohn = new Player(88, 180, 3.5);

const playerMike = new Player(95, 190, 3);


console.log(playerJohn.scoreGoal === playerMike.scoreGoal);



