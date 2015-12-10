import {EventEmitter} from "events";
import AppDispatcher from "../dispatcher/AppDispatcher";
import {ActionTypes} from "../actions/Constants";

let _movies = [];

class MovieStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
      case ActionTypes.RECEIVE_MOVIES:
        _movies = action.movies;
        this.emit("CHANGE");
        break;
      default:
        break;
      }
    });
  }
  // getters
  getMovies() {
    return _movies;
  }
  // listeners
  startListening(callback) {
    this.on("CHANGE", callback);
  }

  stopListening(callback) {
    this.removeListener("CHANGE", callback);
  }
}

export default new MovieStore();
