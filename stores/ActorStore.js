import {EventEmitter} from "events";
import AppDispatcher from "../dispatcher/AppDispatcher";
import {ActionTypes} from "../actions/Constants";

let _actors = [];
const NEW_ACTORS_RECEIVED = "NEW_ACTORS_RECEIVED";

class ActorStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
      case ActionTypes.RECEIVE_ACTORS:
        //clear _actors or it will accumalate after each click
        _actors = []
        action.actors.cast.slice(0,4).forEach(actor => {
          _actors.push({profile_path: actor.profile_path, id: actor.id});
        });
        this.emit(NEW_ACTORS_RECEIVED);
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
    this.on(NEW_ACTORS_RECEIVED, callback);
  }

  stopListening(callback) {
    // special case, if you open first time and the next time will
    // still call the first callback.
    // TODO add more info later after research
    this.removeAllListeners(NEW_ACTORS_RECEIVED, callback);
  }
}

export default new ActorStore();
