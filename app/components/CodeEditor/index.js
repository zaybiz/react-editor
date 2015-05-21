import './index.css';

import React, {Component} from 'react';

export default class CodeEditor extends Component {
  render() {
    return (
      <div className="CodeEditor">
        <div className="CodeEditor-input" contentEditable="true"></div>
      </div>
    );
  }
}