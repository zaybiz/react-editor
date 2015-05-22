import '../styles/JavascriptEditor.css';

import React, {Component} from 'react';
import Signals from '../utils/Signals';
import CodeMirror from 'codemirror';

import 'codemirror/mode/javascript/javascript';

export default class JavascriptEditor extends Component {

  constructor(props) {
    super(props);
    this.editor = null;

    this.settings = {
      mode: 'text/javascript',
      value: "React.render(\n  <h1>Hello, world!</h1>,\n  document.getElementById('content')\n);",
      viewportMargin: Infinity,
      lineNumbers: true,
      lineWrapping: true,
      tabSize: 2,
      foldGutter: true,
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      extraKeys: {
        'Ctrl-Space': 'autocomplete',
        Tab: 'autocomplete'
      },
      autoCloseBrackets: true
    };
  }

  componentDidMount() {
    Signals.runPressed.add(this.handleRunClick.bind(this));
    this.editor = CodeMirror(React.findDOMNode(this.refs.edit), this.settings);
  }

  componentWillUnmount() {
    Signals.runPressed.remove(this.handleRunClick.bind(this));
  }

  handleRunClick() {
    Signals.outputGenerated.dispatch(this.editor.getValue());
  }

  render() {
    return (
      <div className="Panel JavascriptEditor">
        <div className="PanelEdit JsEdit" ref="edit"></div>
      </div>
    );
  }
}