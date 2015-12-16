import React, {Component, PropTypes} from 'react';
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
  }

  componentDidMount() {
    let url = `http://api.themoviedb.org/3/movie/${this.props.id}/credits?api_key=${KEYS.API_KEY}`;
    this.props.actions.fetchActors(url);
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
