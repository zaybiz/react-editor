import './index.css';

import React, {Component} from 'react';
import CodeEditor from './components/CodeEditor';

class App extends Component {
  render() {
    return (
      <CodeEditor />
    );
  }
}

React.render(
  <App />,
  document.getElementById('app')
);