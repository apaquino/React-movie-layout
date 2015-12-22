import {get, post} from "jquery";
import ServerActions from "../actions/ServerActions";

let API = {
  fetchActors(url) {
    get(url)
      .success(actors => ServerActions.receiveActors(actors))
      .error(err => console.error(err.toString()));
  },
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
    .success(console.log("graphQL executed"))
    .error(err => console.error(err.toString()));
  }
};

export default API;
