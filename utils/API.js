import {get} from "jquery";
import ServerActions from "../actions/ServerActions";

const SOURCE = "http://api.themoviedb.org/3/discover/movie?api_key=9e1b08f9af16f8d7c20c0dd0aeb4749a&year=2015&sort_by=revenue.desc";

let API = {
  fetchMovies() {
    get(SOURCE)
      .success(data => ServerActions.receiveMovies(data['results']))
      .error(err => console.error(err.toString()))
  },
  fetchActors(url) {
    get(url)
      .success(actors => ServerActions.receiveActors(actors))
      .error(err => console.error(err.toString()));
  }
};

export default API;
