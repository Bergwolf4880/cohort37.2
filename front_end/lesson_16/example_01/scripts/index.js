let todoList = [
    {task: "Купить молоко", done: false, deadline: "2024-02-23"},
    {task: "Заплатить за интернет", done: true, deadline: "2024-02-20"},
    {task: "Позвонить маме", done: false, deadline: "2024-02-22"},
    {task: "Почитать книгу", done: false, deadline: "2024-02-28"},
    {task: "Сделать домашнее задание", done: true, deadline: "2024-02-21"},
    {task: "Посмотреть фильм", done: false, deadline: "2024-02-24"},
    {task: "Помыть посуду", done: true, deadline: "2024-02-22"},
    {task: "Погулять с собакой", done: false, deadline: "2024-02-23"},
    {task: "Заказать пиццу", done: false, deadline: "2024-02-25"},
    {task: "Посетить врача", done: true, deadline: "2024-02-20"},
    {task: "Починить компьютер", done: false, deadline: "2024-02-26"},
    {task: "Подарить цветы подруге", done: true, deadline: "2024-02-21"},
    {task: "Поиграть в видеоигры", done: false, deadline: "2024-02-27"},
    {task: "Послать резюме", done: true, deadline: "2024-02-20"},
    {task: "Поехать в отпуск", done: false, deadline: "2024-02-29"},
    {task: "Поехать в отпуск", done: false},
  ];

 
const listItemTwoElement = document.querySelector('list-item');
const inputElement = document.querySelector('.task-input');
const createButton = document.querySelector('.btn');
let userInputText;

const createButtonHandler = () => {
    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item');
    newListItem.textContent = userInputText;
    const listAllElements = document.querySelector('.list');
    listAllElements.append(newListItem);
}

const arrayLoop = (element) => {

        const newListItem = document.createElement('li');
        newListItem.classList.add('list-item');
        newListItem.textContent =  element['task'];
        if(element['done'] === true){
            newListItem.classList.add('list-item_done');
        } else {

        }
        const listAllElements = document.querySelector('.list');
        listAllElements.append(newListItem);

}

todoList.forEach(arrayLoop);


const listItemTwoHandler = () => {
    listItemTwoElement.textContent = todoList['done'];
    listItemTwoElement.classList.toggle('list-item_done');
    
}

const inputHandler = () => {
userInputText = inputElement.value;

}


//listItemTwoElement.addEventListener('click', listItemTwoHandler);
inputElement.addEventListener('input', inputHandler);
createButton.addEventListener('click', createButtonHandler);

const btnHandler = (evt) => {
    evt.preventDefault();
}