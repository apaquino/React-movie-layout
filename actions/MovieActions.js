import API from "../utils/API";

let MovieActions = {
  getMovies() {
    API.fetchMovies();
  }
};

export default MovieActions;
