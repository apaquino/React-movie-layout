import React from 'react';

import ActorActions from '../actions/ActorActions';
import ActorStore from '../stores/ActorStore';

class Actors extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			actors: ActorStore.getActors()
		};
	}

	componentDidMount() {
		let url = `http://api.themoviedb.org/3/movie/${this.props.id}/credits?api_key=9e1b08f9af16f8d7c20c0dd0aeb4749a`;
		ActorActions.getActors(url);
		ActorStore.startListening(this._onFluxChange.bind(this));
	}

	componentWillUnmount() {
		ActorStore.stopListening(this._onFluxChange.bind(this));
	}

	createActorImages() {
		return this.state.actors.map(actor => {
			return (
				<img className="actor"
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
		return (
			<div>
				<h1>Actors Here {this.props.id}</h1>
				{this.state.actors ? this.createActorImages() : "loading ..."}
			</div>
		)
	}
}

export default Actors;
