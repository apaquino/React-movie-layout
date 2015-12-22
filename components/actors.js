import React, {Component, PropTypes} from 'react';
import KEYS from '../utils/KEYS';
//12. import actions, bindActionCreators, and connect
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actorActions from '../actions/reduxActions';

const propTypes = {
  id: PropTypes.number.isRequired
};
// 13. create context types so children components have access to the state objects
const contextTypes = {
  store: PropTypes.object
};

class Actors extends Component {
  // 14. add context to constructor methods
  constructor (props, context) {
    super(props, context);
  }

  componentDidMount() {
    let {id} = this.props;

    this.props.actions.fetchActors(id);
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
    return (
      <div>
        <h1>Actors Here {this.props.id}</h1>
				{this.props.actors ? this.createActorImages() : "loading ..."}
			</div>
    )
  }
}

Actors.propTypes = propTypes;
Actors.contextTypes = contextTypes; // 15. add context types to class

// 16. create function to map state to props

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

// 17. use connect function so you don't have to subscribe, unsubscribe, and
// other boilerplate code
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Actors);
