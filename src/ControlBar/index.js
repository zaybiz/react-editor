import './index.css';

import React, {Component} from 'react';

export default class ControlBar extends Component {

  handleRunClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="ControlBar">
        <a href="#" onClick={this.handleRunClick}>Run</a>
      </div>
    );
  }
}