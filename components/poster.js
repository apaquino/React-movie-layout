import React from 'react';

export default class Poster extends React.Component {

	render() {
     return (
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 nopadding space">
          <div className="wrapper">
          <div className="poster">
            <img className="posterImage" src="//image.tmdb.org/t/p/w500/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg"/>
          </div>
          <div className="overlay-text">
            <p> Movie1</p>
            <p><span>5</span>/10
              <span>(100 votes)</span></p>
            </div>           
          </div>
        </div>
      )
	}
}