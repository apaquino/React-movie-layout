import {EventEmitter} from "events";
import AppDispatcher from "../dispatcher/AppDispatcher";
import {ActionTypes} from "../actions/Constants";

let _movies = [];
const NEW_MOVIES_RECEIVED = "NEW_MOVIES_RECEIVED";

class MovieStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
      case ActionTypes.RECEIVE_MOVIES:
        _movies = action.movies;
        this.emit(NEW_MOVIES_RECEIVED);
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
    this.on(NEW_MOVIES_RECEIVED, callback);
  }

  stopListening(callback) {
    this.removeListener(NEW_MOVIES_RECEIVED, callback);
  }
}

export default new MovieStore();
