import React from 'react';

class Actors extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			actors: []
		}
	}

	loadActors () {
		let url = `http://api.themoviedb.org/3/movie/${this.props.id}/credits?api_key=9e1b08f9af16f8d7c20c0dd0aeb4749a`;

		fetch(url)
			.then(response => response.json())
			.then(function(actors) {
				let actorList = [];

				actors.cast.slice(0,4).forEach(actor => {
					actorList.push({profile_path: actor.profile_path, id: actor.id});
				});

				this.setState({actors: actorList});
			}.bind(this))
			.catch(err => console.error(this.props.source, err.toString()));
	}

	componentDidMount () {
		this.loadActors();
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
