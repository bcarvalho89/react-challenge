import React, { Component } from 'react';

class Notify extends Component {
  render() {
    return (
      <div className="notify">
        <span className="notify__message">{this.props.message}</span>
      </div>
    )
  }
}

export default Notify;
