//синхронно ждём ввода от пользователся
// const enterededName = prompt('Enter name');


//берём элементы на странице
const inputElement = document.querySelector('#nameinput');
const getNameBtn = document.querySelector('#getnamebtn');
const cancelEnterName = document.querySelector('#goaway');

let enteredNameString;


const getInputedName = () => {
    return new Promise(
        //Beginning of logic function
        (callBackSuccess, callBackReject) => {
            // callBackSuccess("OK");

            //callBackSuccess logic - status fullfilled
            const handleClickSubmitNameBtn = () => {
                enteredNameString = inputElement.value;
                callBackSuccess(enteredNameString);
            }
            getNameBtn.addEventListener('click', handleClickSubmitNameBtn)

            //callBackReject logic - status rejected
            const handleClickRejectNameBtn = () => {
                callBackReject('Denied');

            }
            cancelEnterName.addEventListener('click', handleClickRejectNameBtn);


        }
        //End of logic function
    )
}

   	        
const resultOfInput = getInputedName();


resultOfInput.then(argum => {
                        console.log(argum)
        })




// resultOfInput.then(argum =>  console.log(argum))
// .catch(argum => console.log(argum))
// .finally(argum => console.log(argum));



// helloMaker(enteredNameString);

// function helloMaker(name) {
//     console.log(`hello ${name}`);
// }
