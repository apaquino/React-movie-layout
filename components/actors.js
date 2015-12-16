import React, {Component, PropTypes} from 'react';

import ActorActions from '../actions/ActorActions';
import ActorStore from '../stores/ActorStore';
import KEYS from '../utils/KEYS';
//10. import actions, bindActionCreators, and connect
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actorActions from '../actions/reduxActions';


const propTypes = {
  id: PropTypes.number.isRequired
};
// 11. create context types so children components have access to the state objects
const contextTypes = {
  store: PropTypes.object
};

class Actors extends Component {
  // 12. add context to constructor methods
  constructor (props, context) {
    super(props, context);
    // this.state = {
    //   actors: ActorStore.getActors()
    // };
  }

  componentDidMount() {
    let url = `http://api.themoviedb.org/3/movie/${this.props.id}/credits?api_key=${KEYS.API_KEY}`;
    this.props.actions.fetchActors(url);
    console.log("CDM", this.props.actors);
    // ActorActions.retrieveActors(url);
    // ActorStore.startListening(this._onFluxChange.bind(this));
  }

  componentWillReceiveProps(nextProps){
    console.log("received new props", this.props);
  }

  componentWillUnmount() {
    // ActorStore.stopListening(this._onFluxChange.bind(this));
  }

  createActorImages() {
    return this.props.actors.map(actor => {
      return (
        <img
					className="actor"
          key={actor.id}
          src={`//image.tmdb.org/t/p/w300/${actor.profile_path}`}>
				</img>)
  	})
	}

  _getActorsState() {
    return ActorStore.getActors();
  }

  _onFluxChange() {
    this.setState({actors: this._getActorsState()});
  }

  render() {
    console.log("actors props", this.props);
    return (
      <div>
        <h1>Actors Here {this.props.id}</h1>
				{this.props.actors ? this.createActorImages() : "loading ..."}
			</div>
    )
  }
}

Actors.propTypes = propTypes;
Actors.contextTypes = contextTypes; // 13. add context types to class

// 14. create function to map state to props

function mapStateToProps(state) {
  const {actors, isLoadingActors} = state.actors;
  return {
    isLoadingActors,
    actors
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actorActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Actors);

// export default Actors;
