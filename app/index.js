import './styles/app.css';

import React from 'react';
import App from './components/App';

const defaultCode = `var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello, {this.props.name}!</div>;
  }
});
return <HelloMessage name="Humans" />;
`;

React.render(
  <App codeText={defaultCode} />,
  document.getElementById('content')
);