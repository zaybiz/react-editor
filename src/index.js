import './index.css';

import React, {Component} from 'react';

import Editor from './CodeEditor';
import Preview from './CodePreview';
import Control from './ControlBar';

class App extends Component {
  render() {
    return (
      <div>
        <Control />
        <Editor />
        <Preview />
      </div>
    );
  }
}

React.render(
  <App />,
  document.getElementById('app')
);