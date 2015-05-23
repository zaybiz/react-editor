import './styles/index.css';

import React from 'react';
import App from './components/App';

const defaultCode = `var HelloMessage = React.createClass({
  render: function() {
    return <h3>Hello, {this.props.name}!</h3>;
  }
});
return <HelloMessage name="humans" />;
`;

React.render(
  <App codeText={defaultCode} />,
  document.getElementById('content')
);