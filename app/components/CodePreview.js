import '../styles/CodePreview.css';

import React from 'react';

var selfClearTimeout = {
  componentDidUpdate() {
    clearTimeout(this.timeoutId);
  },

  setTimeout() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout.apply(null, arguments);
  }
};

const CodePreview = React.createClass({

  propTypes: {
    code: React.PropTypes.string.isRequired
  },

  mixins: [selfClearTimeout],

  componentDidMount() {
    this.executeCode();
  },

  componentDidUpdate(prevProps) {
    // execute code only when the state's not being updated by switching tab
    // this avoids re-displaying the error, which comes after a certain delay
    if (this.props.code !== prevProps.code) {
      this.executeCode();
    }
  },

  compileCode() {
    return window.JSXTransformer.transform(
      '(function() {' +
          this.props.code +
      '\n})();',
    { harmony: true }
    ).code;
  },

  executeCode() {
    var mountNode = this.refs.mount.getDOMNode();

    try {
      React.unmountComponentAtNode(mountNode);
    } catch (e) { }

    try {
      var compiledCode = this.compileCode();
      React.render(eval(compiledCode), mountNode);
    } catch (err) {
      this.setTimeout(function() {
        React.render(
          <div className="playgroundError">{err.toString()}</div>,
          mountNode
        );
      }, 500);
    }
  },

  render() {
    return (
      <div className="Panel CodePreview">
        <div className="PanelPreview" ref="mount"></div>
      </div>
    );
  }
});

export default CodePreview;