import React, {Component, PropTypes} from 'react';
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
    super(props)
    this.state = { showModal: false }
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

	render() {
    let url = `//image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`;
    let popover = <Popover title="popover">very popover. such engagement</Popover>;
    let tooltip = <Tooltip>wow.</Tooltip>;
    return (
      <div onClick={this.open.bind(this)} className="col-lg-3 col-md-3 col-sm-6 col-xs-6 nopadding space">
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
        {this.state.showModal ? <PosterModal {...this.props}
                                  showModal={this.state.showModal}
                                  url={url}
                                  handleClose={this.close.bind(this)}
                                /> : null
        }
      </div>
    )
	}
}

Poster.propTypes = propTypes;

export default Poster;
