import './index.css';

import React, {Component} from 'react';

import Editor from './components/CodeEditor';
import Preview from './components/CodePreview';
import Control from './components/ControlBar';

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
  React.createFactory(App)(),
  document.getElementById('app')
);