const responseFromServerPromise = (query) => {
    return fetch(query);
}


const serverWorks = async (q) => {

   

        const serverResponse = await responseFromServerPromise(q);
        const body = await serverResponse.json();
        pushToConsole(body);
}


serverWorks('https://jsonplaceholder.typicode.com/todos')


function pushToConsole(obj) {
    console.log(obj)
};

// обработка ошибок в асинхронных функциях

const serverWorksTryCatch = async (q) => {

    try {

        const serverResponse = await responseFromServerPromise(q);
        const body = await serverResponse.json();
        pushToConsole(body);

    } catch {



    } finally {
        
    }
}


function pushToConsole(obj) {
    console.log(obj)
};

