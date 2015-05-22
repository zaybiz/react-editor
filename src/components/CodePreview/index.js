import './index.css';

import React, {Component} from 'react';

import Signals from '../../utils/Signals';

export default class CodePreview extends Component {

  constructor(props) {
    super(props);
    this.sandbox = {};
  }

  componentDidMount() {
    this.sandbox = document.createElement('iframe');
    this.sandbox.src = 'preview.html';
    this.sandbox.scrolling = 'no';
    this.sandbox.setAttribute('allowfullscreen', !0);
    this.sandbox.sandbox = 'allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts';
    React.findDOMNode(this.refs.result).appendChild(this.sandbox);
    this.sandbox.addEventListener('load', this.preRenderPreview);
    Signals.outputGenerated.add(this.onOutputGenerate.bind(this));
  }

  componentWillUnmount() {
    this.sandbox.removeEventListener('load', this.preRenderPreview.bind(this));
    this.sandbox = null;
    Signals.outputGenerated.remove(this.onOutputGenerate);
  }

  onOutputGenerate(html) {
    var markup = '<!doctype html><html><head><meta charset="utf-8"><title></title></head><body></body></html>';
    html = markup.replace('</body>', html + '</body>');
    this.renderPreview(html);
  }

  preRenderPreview() {
    //clearTimeout(this.rendertimeout), 
    //this.rendertimeout = setTimeout(this._render.bind(this), a !== c ? a : 250)
  }

  renderPreview(html) {
    this.sandbox.contentWindow.postMessage(
      JSON.stringify({
        action: 'render',
        output: html
      }),
      'http://localhost:8080'
    );
  }

  render() {
    return (
      <div className="CodePreview">
        <div className="PanelResult" ref="result"></div>
      </div>
    );
  }
}