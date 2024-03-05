const fetchParams = {
  method: 'GET',
  headers: {
    'X-API-KEY': '1be6749b-dbf1-4f49-814f-8b1bf84b0931',
    'Content-Type': 'application/json',
  },
};




const bannerBox = document.querySelector('.banner-row');
const banner = document.querySelector('.banner');
const genre = document.querySelector('.genre');
const movieDetails = document.querySelector('.movie-details');
const dateOfRelease = document.querySelector('.year');


let promise = fetch(
  'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1',
  fetchParams
);



const serverWorks = async (q) => {
  const response = await promise;
  const body = await response.json();
  console.log(body.films);
    
};

function filmsData(films){
const filmsArr = films.map(obj =>{
  const createBanner = document.createElement('div').classList.add('banner');
  const createMoviedetais = document.createElement('div').classList.add('movie-details');
  const createDateOfRelease = document.createElement('p').classList.add('year');
  const createTitle = document.createElement('h3');
  const createDescription = document.createElement('p')

  createTitle.textContent= obj.nameRu;

})

}

serverWorks();
