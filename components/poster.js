import React from 'react';
import { Modal } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { popover } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';


export default class Poster extends React.Component {

  constructor (props) {
    super(props)
    this.state = { showModal: false }
  }

  open() {
    console.log('test')
    this.setState({ showModal: true });
  }

   close() {
    console.log('test')
    this.setState({ showModal: false });
  }
 

	render() {
    let url = "//image.tmdb.org/t/p/w500/" + this.props.movie.poster_path;
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
               <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.movie.original_title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div class="col-lg-3">
      <div className="poster">
            <img className="posterImage" src= {url}/>
          </div>
    </div>
    <div class="col-lg-9">
      <h2>  {this.props.movie.original_title }</h2>
      
      <p><span >{this.props.movie.vote_average}</span>/10
      <span >({this.props.movie.vote_count} votes)</span>
      <span>{this.props.movie.overview}</span></p>
      </div>
          
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
        </div>
      )
	}
}