import './index.css';

import React, {Component} from 'react';

export default class CodeEditor extends Component {

  constructor(props) {
    super(props);
    this.sandbox = null;
  }

  componentDidMount() {
    this.sandbox = document.createElement('iframe');
    this.sandbox.src = 'preview.html';
    this.sandbox.scrolling = 'no';
    this.sandbox.setAttribute('allowfullscreen', !0);
    this.sandbox.sandbox = 'allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts';
    React.findDOMNode(this.refs.result).appendChild(this.sandbox);
    this.sandbox.addEventListener('load', this.preRender);
  }

  componentWillUnmount() {
    this.sandbox.removeEventListener('load', this.preRender);
    this.sandbox = null;
  }

  preRender() {}

  render() {
    return (
      <div className="CodePreview">
        <div className="PanelResult" ref="result"></div>
      </div>
    );
  }
}