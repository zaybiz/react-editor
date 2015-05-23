import './styles/app.css';

import React from 'react';
import App from './components/App';

const defaultCode = `var App = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});
return <App name="Henrique" />;
`;

React.render(
  <App codeText={defaultCode} />,
  document.getElementById('app')
);