//FETCH


const getGitHubData = (q) => {
    return fetch(q)
}

const githubData = getGitHubData('https://api.github.com/users/Bergwolf4880')


// console.log(githubData);

// const newTestPromise = githubData
//     .then((response) => {
//         response.json()
//         return 111
//         }) // returns Promise

// .then((result) => {console.log(result); return 222}).then((result) => {console.log(result)})



githubData.then((response) => { return response.json() })
    .then((resultObject) => {
        console.log(resultObject)
        showAvatar(resultObject.avatar_url)
        return resultObject;
    })

    .then((resultObject) => {
        showName(resultObject.name);
        console.log(resultObject);
        return resultObject.repos_url;
    })
 .then((repos) => {
    console.log(repos);
    const githubDataRepos = getGitHubData(repos);
    githubDataRepos.then((response) => {return response.json()
    .then((resultOBject) => {console.log(resultOBject[0].name);})})
 })





showRepo('https://api.github.com/users/Bergwolf4880/repos')




function showRepo(repoUrl) {
    const containerForRepo = document.querySelector('#repo')
    const repoElement = document.createElement('text')
    repoElement.src = repoUrl;
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

// showAvatar('https://avatars.githubusercontent.com/u/143229625?v=4')




// const player = {
// weight:80,
// height:180,
// }

// console.log(player);
// console.log(typeof player);

//const jsonPlayer =  JSON.stringify(player);

// console.log(jsonPlayer);
// console.log(typeof jsonPlayer);

