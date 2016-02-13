import React, { Component, PropTypes } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Actors from './actors';

const propTypes = {
    showModal: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    movie: PropTypes.shape({
      original_title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      vote_count: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
};

class PosterModal extends Component {
  render() {
    const { handleClose, showModal, url } = this.props;
    const {
      original_title,
      vote_average,
      vote_count,
      overview,
      id,
    } = this.props.movie;

    return (
      <Modal show={showModal} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>{original_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-lg-3">
            <div className="poster">
              <img className="posterImage" src= {url}/>
            </div>
          </div>
          <div className="col-lg-9">
            <h2>{original_title }</h2>
            <p><span >{vote_average}</span>/10
            <span>({vote_count} votes)</span>
            <span>{overview}</span></p>
            <Actors id={id}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleClose()}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

PosterModal.propTypes = propTypes;

export default PosterModal;
