import '../styles/JavascriptEditor.css';

import React, {Component} from 'react';
import Signals from '../utils/Signals';
import CodeMirror from 'codemirror';


export default class JavascriptEditor extends Component {

  constructor(props) {
    super(props);
    this.editor = null;
    this.settings = {
      mode: 'text/javascript',
      viewportMargin: Infinity,
      lineNumbers: !0,
      lineWrapping: !0,
      theme: 'ceditor',
      tabSize: 2,
      foldGutter: !0,
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      extraKeys: {
        'Ctrl-Space': 'autocomplete',
        Tab: 'autocomplete'
      },
      autoCloseBrackets: !0
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