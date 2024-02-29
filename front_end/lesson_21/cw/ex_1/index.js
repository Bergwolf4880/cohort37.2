//синхронно ждём ввода от пользователся
// const enterededName = prompt('Enter name');


//берём элементы на странице
const inputElement = document.querySelector('#nameinput');
const getNameBtn = document.querySelector('#getnamebtn');
const cancelEnterName = document.querySelector('#goaway');

let enteredNameString;


const getInputedName = (helloMaker) => {
    
    const handleClickSubmitNameBtn = () =>{
        enteredNameString = inputElement.value;
        helloMaker(enteredNameString);
    }
    getNameBtn.addEventListener('click', handleClickSubmitNameBtn);


}



getInputedName(helloMaker);


// helloMaker(enteredNameString);

function helloMaker(name){
    console.log(`hello ${name}`);
}
