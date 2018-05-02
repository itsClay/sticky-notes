import React, { Component } from 'react';

import './modal.css'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { 'title': '', 'body': '' }
    this.handleChange = this.handleChange.bind(this)
  }

  // componentDidMount() {
  //   window.addEventListener('keyup', this.handleKeyUp, false)
  //   document.addEventListener('click', this.handleOutsideClick, false)
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("keyup", this.handleKeyUp, false);
  //   document.removeEventListener("click", this.handleOutsideClick, false);
  // }

  // handleKeyUp(event) {
  //   const { closeRequest } = this.props;
  // }

  // handleOutsideClick(event) {
  //   const { closeRequest } = this.props;
  // }

  close(e) {
    e.preventDefault()
    if (this.props.onClose) {this.props.onClose()}
  }

  handleChange(e) {
    let key = e.target.className.split('modal-')[1];
    let obj = {}

    obj[key] = e.target.value
    this.setState(obj)
    console.log(this.state);
  }



  render() {
    if (this.props.isOpen === false) { return null }

    return (
      <div>
        <div className="modal-overlay" onClick={e => this.close(e)}></div>
        <div className="modal">
          <div className="modal-colors">Colors</div>
          <input className="modal-title" 
                 placeholder="Untitled"
                 onChange={this.handleChange}
                 value={this.state.title}
          ></input>
          <textarea className="modal-body" 
                 placeholder="Just start typing here"
                 onChange={this.handleChange}
                 value={this.state.body}
          ></textarea>
          <div className="modal-button-container">
            <button className="modal-btn cancel" 
                    onClick={e=> this.close(e)}
            >Cancel</button>
            <button className="modal-btn" 
                    onClick={this.handleChange}
            >Add</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;