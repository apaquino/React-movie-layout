import API from "../utils/API";

let ActorActions = {
  getActors(id) {
    API.fetchActors(id);
  }
};

export default ActorActions;
