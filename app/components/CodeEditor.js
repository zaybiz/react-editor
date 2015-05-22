import '../styles/CodeEditor.css';

import React, {Component} from 'react';

import Signals from '../utils/Signals';

export default class CodeEditor extends Component {

  componentDidMount() {
    Signals.runPressed.add(this.handleRunClick.bind(this));
    React.findDOMNode(this.refs.edit).focus();
  }

  componentWillUnmount() {
    Signals.runPressed.remove(this.handleRunClick.bind(this));
  }

  handleRunClick() {
    var html = React.findDOMNode(this.refs.edit).innerText;
    Signals.outputGenerated.dispatch(html.trim());
  }

  render() {
    return (
      <div className="Panel CodeEditor">
        <div className="CodeEditor-edit" ref="edit"></div>
      </div>
    );
  }
}