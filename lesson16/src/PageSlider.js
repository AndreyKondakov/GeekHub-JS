import React, { Component } from 'react';

class PageSlider extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="slide" width='500px' height='250px' />
        <p>{this.props.title}</p>
      </div>
    )}
}

export default PageSlider;