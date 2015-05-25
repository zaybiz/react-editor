import './styles/index.css';

import React from 'react';
import App from './components/App';

const defaultCode = `// Code sample from Facebook's tutorial
// https://facebook.github.io/react/docs/tutorial.html
var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h4 className="commentAuthor">
          {this.props.author}
        </h4>
        {this.props.children}
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h3>Comments</h3>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

return <CommentBox data={data} />;
`;

React.render(
  <App codeText={defaultCode} />,
  document.getElementById('content')
);