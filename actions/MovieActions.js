import API from "../utils/API";

// change to GraphQL
let MovieActions = {
  retrieveMovies() {
    API.fetchMoviesGraphQL();
  }
};

export default MovieActions;
