import React, { Component } from "react";

import Modal from "../modal/modal"
import './nav.css'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  render() {
    console.log('state', this.state);
    return (
      <nav className="nav">
        <h1 className="nav-title">Post-It App</h1>
        <button className="nav-btn" onClick={this.openModal}>+ Add Note</button>
        <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal} />
      </nav>
    )
  }
}

export default Nav;