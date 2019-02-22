import React, { Component } from 'react';

class PageSlider extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="slide" height='300px' width='600px' />
        <p>{this.props.title}</p>
      </div>
    )}
}

export default PageSlider;