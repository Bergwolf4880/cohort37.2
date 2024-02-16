console.log("Hello world")

const secondItemElement = document.querySelector('#second-item')

// console.log(document);

//console.log(secondItemElement.innerHTML)

// const secondItemElementClick = () => {secondItemElement.classList.toggle('list-item_done');}; //add //remove...
const secondItemElementClick = () => {secondItemElement.style.backgroundColor="blue";}
secondItemElement.addEventListener('click', secondItemElementClick);


