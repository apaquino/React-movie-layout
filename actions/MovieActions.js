import API from "../utils/API";

let MovieActions = {
  retrieveMovies() {
    API.fetchMovies();
  }
};

export default MovieActions;
