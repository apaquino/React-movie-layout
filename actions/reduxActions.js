import fetch from 'isomorphic-fetch';
import KEYS from "../utils/KEYS";

const SOURCE = `http://api.themoviedb.org/3/discover/movie?api_key=${KEYS.API_KEY}&year=2015&sort_by=revenue.desc`;

// 1. create constants that just describe the actions
// make it all uppercase and snaked

export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const REQUEST_ACTORS = 'REQUEST_ACTORS';
export const RECEIVE_ACTORS = 'RECEIVE_ACTORS';

// 2. create functions similiar to constants but camel case
// that return the object with the type (mandatory) and payload
// have separate functions to make the request and then receive it
// separation of concerns

export function requestMovies() {
  return {
    type: REQUEST_MOVIES
  };
}

export function receiveMovies(movies) {
  return {
    type: RECEIVE_MOVIES,
    movies
  };
}

export function requestActors(actorsUrl) {
  return {
    type: REQUEST_ACTORS,
    actorsUrl
  };
}

export function receiveActors(actors) {
  return {
    type: RECEIVE_ACTORS,
    actors
  };
}

// 3. create function that has the imperative process to get the movies
// calls the request and receive functions

export function fetchMovies() {
  return dispatch => {
    dispatch(requestMovies());
      return fetch(SOURCE)
               .then(response => response.json())
               .then(json => {
                 dispatch(receiveMovies(json.results));
               });
  };
}

export function fetchActors(actorsUrl) {
  return dispatch => {
    dispatch(requestActors(actorsUrl));
      return fetch(actorsUrl)
               .then(response => response.json())
               .then(json => {
                 dispatch(receiveActors(json.cast));
               });
  };
}
