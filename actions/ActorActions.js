import API from "../utils/API";

let ActorActions = {
  retrieveActors(id, first) {
    API.fetchActorsGraphQL(id, first);
  }
};

export default ActorActions;
