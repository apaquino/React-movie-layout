import {EventEmitter} from "events";
import AppDispatcher from "../dispatcher/AppDispatcher";
import {ActionTypes} from "../actions/ACTION_CONSTANTS";
import {EVENTS} from "./EVENT_CONSTANTS";

let _movies = [];

class MovieStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
      case ActionTypes.RECEIVE_MOVIES:
        _movies = action.movies;
        this.emit(EVENTS.NEW_MOVIES_RECEIVED);
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
    this.on(EVENTS.NEW_MOVIES_RECEIVED, callback);
  }

  stopListening(callback) {
    this.removeListener(EVENTS.NEW_MOVIES_RECEIVED, callback);
  }
}

export default new MovieStore();
