import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDY_9GG3TczTbsiBqrY3i1gFXKcJJ5kOoc';

const App = () => {
  return <div><SearchBar /></div>;
}

ReactDOM.render(
  <App />
  , document.querySelector('.container'));
