import React, {Component} from 'react';

import CodeMirror from 'codemirror';

import 'codemirror/addon/fold/foldcode';
import 'codemirror/mode/javascript/javascript';

const isMobile = (
  navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
);

export default class CodeMirrorEditor extends Component {

  constructor(props) {
    super(props);
    this.editor = {};
  }

  componentDidMount() {
    if (isMobile) {
      return;
    }

    this.editor = CodeMirror.fromTextArea(this.refs.editor.getDOMNode(), {
      mode: 'javascript',
      lineNumbers: false,
      lineWrapping: true,
      smartIndent: false, // javascript mode does bad things with jsx indents
      matchBrackets: true,
      theme: 'solarized-light',
      readOnly: this.props.readOnly
    });

    this.editor.foldCode(0, { widget: '...' });
    this.editor.on('change', this.handleChange.bind(this));
  }

  componentDidUpdate() {
    if (this.props.readOnly) {
      this.editor.setValue(this.props.code);
    }
  }

  handleChange() {
    if (!this.props.readOnly && this.props.onChange) {
      this.props.onChange(this.editor.getValue());
    }
  }

  render() {
    var editor;

    if (isMobile) {
      editor = <pre style={{overflow: 'scroll'}}>{this.props.code}</pre>;
    } else {
      editor = <textarea ref="editor" defaultValue={this.props.code} />;
    }

    return (
      <div>{editor}</div>
    );
  }
}

CodeMirrorEditor.propTypes = {
  code: React.PropTypes.string.isRequired,
  readOnly: React.PropTypes.bool,
  onChange: React.PropTypes.func
};