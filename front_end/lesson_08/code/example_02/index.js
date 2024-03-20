const inputHeightElement = document.querySelector('#heightInput');
inputHeightElement.addEventListener('input', inputHeightFieldInput);

const inputWeightElement = document.querySelector('#weighInput');
inputWeightElement.addEventListener('input', inputWeightFieldInput);

let userHeightInput;
let userInputWeight;

const calculateButtonElemnt = document.querySelector('.button');
const bmiOutput = document.querySelector('#result1');
calculateButtonElemnt.addEventListener('click', submitButtonHandler);


const inputHeightFieldInput = (evt)=> {
    userHeightInput = Number(evt.target.value);
    console.log(userHeightInput);
}


const inputWeightFieldInput = (evt)=> {
    userInputWeight = Number(evt.target.value);
    console.log(userInputWeight);
}

const submitButtonHandler = () => {
    console.log(userHeightInput);
    const result = Math.ceil(userInputWeight/(userHeightInput**2)); 
    bmiOutput.textContent = result;
    
}
