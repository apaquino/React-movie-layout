import AppDispatcher from "../dispatcher/AppDispatcher";
import {ActionTypes} from "./Constants";

let ServerActions = {
  receiveMovies(movies) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_MOVIES,
      movies
    });
  },
  receiveActors(actors) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_ACTORS,
      actors
    });
  },
};

export default ServerActions;
