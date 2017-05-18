import React from 'react';
import ReactDOM from 'react-dom';
import DATA from './data';
import App from './App';

ReactDOM.render(
  <App customData={DATA} />,
  document.getElementById('root')
);
