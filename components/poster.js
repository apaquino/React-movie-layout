import React, { Component, PropTypes } from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import { popover } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import PosterModal from './posterModal';

const propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired
    })
};

class Poster extends Component {
  constructor (props) {
    super(props);
    this.state = { showModal: false };
  }

	render() {
    const url = `//image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`;
    const popover = <Popover id="Popover" title="popover">Cool stuff</Popover>;
    const tooltip = <Tooltip id="Toolipt" >Poster Tooltip.</Tooltip>;
    const { original_title, vote_average, vote_count } = this.props.movie;
    const { showModal } = this.state;
    return (
      <div
        onClick={() => this.setState({ showModal: true })}
        className="col-lg-3 col-md-3 col-sm-6 col-xs-6 nopadding space"
      >
        <div className="wrapper">
          <div className="poster">
            <img className="posterImage" src= {url}/>
          </div>
          <div className="overlay-text">
            <p>{original_title}</p>
            <p><span>{vote_average}</span>/10
            <span>({vote_count} votes)</span></p>
          </div>
        </div>
        {showModal ? <PosterModal
                      {...this.props}
                      showModal={showModal}
                      url={url}
                      handleClose={() => this.setState({ showModal: false })}
                      /> : <div />
        }
      </div>
    )
	}
}

Poster.propTypes = propTypes;

export default Poster;
