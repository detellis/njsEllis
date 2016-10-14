// Create a new component.  Should produce HTML
import React from 'react';
import ReactDOM from 'react-dom'

const app = function() {
  return <div>Hi!</div>;
}


// Take generated HTML and render it
ReactDOM.render(<div>Hi!</div>, document.querySelector('.container'))
ReactDOM.render(<app />,document.querySelector('.container'));
