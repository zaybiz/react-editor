import '../styles/ControlBar.css';

import React, {Component} from 'react';
import Signals from '../utils/Signals';

export default class ControlBar extends Component {

  handleRunClick(e) {
    e.preventDefault();
    Signals.runPressed.dispatch();
  }

  render() {
    return (
      <div className="ControlBar">
        <a href="#" onClick={this.handleRunClick}>Run</a>
      </div>
    );
  }
}