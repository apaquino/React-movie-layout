import API from "../utils/API";

let ActorActions = {
  retrieveActors(id) {
    API.fetchActors(id);
  }
};

export default ActorActions;
