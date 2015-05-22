import './styles/app.css';

import React, {Component} from 'react';

import Editor from './components/CodeEditor';
import Preview from './components/CodePreview';
import Control from './components/ControlBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Control />
        <div className="Editor">
          <Editor />
          <Preview />
        </div>
      </div>
    );
  }
}

React.render(
  React.createFactory(App)(),
  document.getElementById('app')
);