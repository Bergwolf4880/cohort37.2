const jsonSourceUrl = fetch('https://jsonplaceholder.typicode.com/todos')
const listItemContainer = document.querySelector('#tasksList');

jsonSourceUrl.then((response) => response.json())
    .then((obj) => jsonToList(obj));


const jsonToList = (obj) => obj.map((el) => {

    const listItem = document.createElement('li');
    switch (el.completed) {
        case true: listItem.classList.add('list-item-done'); break;
        case false: listItem.classList.add('list-item'); break;
    }

    listItem.textContent = formatString(el);
    listItemContainer.append(listItem);

});

function formatString(el) {
    return JSON.stringify(el).substring(1, JSON.stringify(el).length - 1)
};




