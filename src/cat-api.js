import axios from 'axios';
import Notiflix from 'notiflix';
export { fetchBreeds, fetchCatByBreed };
axios.defaults.headers.common['x-api-key'] =
  'live_WAqY9IEZy8R384ilN4MGMDdqt5bW6u0inE9v1p8ZtRZw0t1pkdZnvqgHPcV52dOf';

function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(Response => Response.data);
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      Notiflix.Loading.dots('Loading');
      return response.data;
    })
    .finally(() => {
      Notiflix.Loading.remove();
    });
}
