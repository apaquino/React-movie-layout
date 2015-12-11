import {get} from "jquery";
import ServerActions from "../actions/ServerActions";
import KEYS from "./KEYS";

const SOURCE = `http://api.themoviedb.org/3/discover/movie?api_key=${KEYS.API_KEY}&year=2015&sort_by=revenue.desc`;

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
