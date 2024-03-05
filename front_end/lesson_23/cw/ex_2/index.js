const responseFromServerPromise = (query) => {
    return fetch(query);
}
const serverWorks = async (q) => {

    const serverResponse = await responseFromServerPromise(q);
    const body = await serverResponse.json();
   
    const repo = await fetch(body.repos_url);
    const temp = await repo.json();
    
    showName(body.name);
    showAvatar(body.avatar_url)
    showRepo(temp); 
    
}


serverWorks('https://api.github.com/users/Bergwolf4880')


function showRepo(repoUrl) {
const 
    const containerForRepo = document.querySelector('#repo')
    repoUrl.forEach(el =>{
    
    const repoElement = document.createElement('text')
    repoElement.textContent = el;
    })
    containerForRepo.append(repoElement)
}


// showName
function showName(name) {
    const containerForName = document.querySelector('#name')
    const nameElement = document.createElement('text')
    nameElement.textContent = name;
    containerForName.append(nameElement)
}


//create avatar image element function
function showAvatar(avatarUrl) {
    const containerForAvatar = document.querySelector('#ava');
    const avatarElement = document.createElement('img');
    avatarElement.src = avatarUrl;
    containerForAvatar.append(avatarElement);
}