import {EventEmitter} from "events";
import AppDispatcher from "../dispatcher/AppDispatcher";
import {ActionTypes} from "../actions/ACTION_CONSTANTS";
import {EVENTS} from "./EVENT_CONSTANTS";

let _actors = [];

class ActorStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
      case ActionTypes.RECEIVE_ACTORS:
        _actors = action.actors;
        this.emit(EVENTS.NEW_ACTORS_RECEIVED);
        break;
      default:
        break;
      }
    });
  }
  // getters
  getActors() {
    return _actors;
  }
  // listeners
  startListening(callback) {
    this.on(EVENTS.NEW_ACTORS_RECEIVED, callback);
  }

  stopListening(callback) {
    // special case, if you open first time and the next time will
    // still call the first callback.
    // TODO add more info later after research
    this.removeAllListeners(EVENTS.NEW_ACTORS_RECEIVED, callback);
  }
}

export default new ActorStore();
