const responseFromServerPromise = (query) => {
    return fetch(query);
}

// const serverResponse = responseFromServerPromise('https://jsonplaceholder.typicode.com/todos');

// serverResponse.then(response => response.json())
//     .then(body => console.log(body))




const serverWorks = async (q) => {
    // console.log('first one');
    const serverResponse = await responseFromServerPromise(q);
    // console.log('plain log from async function');

    const body = await serverResponse.json();
    // console.log(body);
    // console.log('sync action');

    pushToConsole(body);
 }

 serverWorks('https://jsonplaceholder.typicode.com/todos')
//  .then((response)=> response.json())
//  .then(body => console.log(body))
//  .then(resultOfPromise => console.log(resultOfPromise));

console.log('one more plain log');


function pushToConsole(obj){
    console.log(obj)
}