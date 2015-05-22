import './index.css';

import React, {Component} from 'react';

export default class CodeEditor extends Component {

  componentDidMount() {
    React.findDOMNode(this.refs.editor).focus();
  }

  render() {
    return (
      <div className="CodeEditor">
        <div className="CodeEditor-input" contentEditable="true" ref="editor"></div>
      </div>
    );
  }
}