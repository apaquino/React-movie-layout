import React from 'react';

export default class Poster extends React.Component {


	render() {
    let url = "//image.tmdb.org/t/p/w500/" + this.props.movie.poster_path;
     return (
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 nopadding space">
          <div className="wrapper">
          <div className="poster">
            <img className="posterImage" src= {url}/>
          </div>
          <div className="overlay-text">
            <p> {this.props.movie.original_title}</p>
            <p><span>{this.props.movie.vote_average}</span>/10
              <span>({this.props.movie.vote_count} votes)</span></p>
            </div>           
          </div>
        </div>
      )
	}
}