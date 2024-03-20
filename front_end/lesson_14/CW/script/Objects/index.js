const h = 'height';

[3, 4, 5, 'f', null];


const playerJohn = {
    height: 170,
    weight: 80,
    sport: 'rugbie',
    'full name': 'John Doe',
    sing:(songTheme)=>{
        return songTheme;
        console.log(songTheme)
    }
}

const concert = {
    duration: 120,
    musician: 'Adele',
    date:{
        dayOfWeek: 'monday',
        year: 2024,
        date: 13
    }
}

// playerJohn.sing('We are the champions');

// console.log(concert.date.date);

// console.log(playerJohn['full name']);

// console.log(playerJohn[h]);
/////////////////////////////////////////

// Добавление ключей (свойств)

// console.log(playerJohn);
 playerJohn.speed=90;
// console.log(playerJohn.speed);

// for(i in playerJohn){
//     console.log(playerJohn[i]);
// }

const toDo ={
    0:'get up',
    1:'drink',
    2:'eat'
}

const toDoArr = ['get up a','drink a','eat a']

//console.log(toDo[0]);


// for(let i=0; i<toDoArr.length; i++){
//     console.log(toDoArr[i]);
// }
for(i in toDoArr){
    console.log(toDoArr[i]);
}

const toDoKeys = Object.keys(playerJohn);
const toDoValues = Object.values(playerJohn);
const arrEntries = Object.entries(playerJohn);

// console.log(toDoKeys);
// console.log(toDoValues);
// console.log(arrEntries);

// for(let i = 0; i<toDoKeys.length; i++){
//     console.log(toDoKeys[i]);
//     console.log(playerJohn[toDoKeys[i]]);
// }

const height = 170;
const weight = 80;
const sport = 'rugbie';

const sampleObj = {
    height,
    weight,
    sport
};

// console.log(sampleObj);