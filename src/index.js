import './index.css';

import React, {Component} from 'react';

import CodeEditor from './CodeEditor';
import CodePreview from './CodePreview';

class App extends Component {
  render() {
    return (
      <div>
        <CodeEditor />
        <CodePreview />
      </div>
    );
  }
}

React.render(
  <App />,
  document.getElementById('app')
);