import React, {Component} from 'react';

import CodeMirrorEditor from './CodeMirrorEditor';
import CodePreview from './CodePreview';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {code: this.props.codeText};
  }

  handleCodeChange(code) {
    this.setState({code});
  }

  render() {
    return (
      <div className="App">
        <div className="Editor">
          <CodeMirrorEditor
            key="jsx"
            onChange={this.handleCodeChange.bind(this)}
            code={this.state.code}/>
          <CodePreview code={this.state.code} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  codeText: React.PropTypes.string.isRequired
};