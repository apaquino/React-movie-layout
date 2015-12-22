import {get, post} from "jquery";
import ServerActions from "../actions/ServerActions";

let API = {
  fetchMoviesGraphQL() {
    return post("/graphql", {
      query: `
      {
        movies {
          poster_path,
          vote_count,
          vote_average,
          original_title,
          overview,
          id
        }
      }
      `
    })
    .success(response => ServerActions.receiveMovies(response.data.movies))
    .error(err => console.error(err.toString()));
  },
  fetchActorsGraphQL(id, first) {
    return post("/graphql", {
      query: `
      {
      	actors(id: ${id}, first:${first}) {
          id,
          profile_path
        }
      }
      `
    })
    .success(response => {
      return ServerActions.receiveActors(response.data.actors);
    })
    .error(err => console.error(err.toString()));
  },
};

export default API;
