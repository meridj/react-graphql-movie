// @flow

/**
 * Npm imports
 */

import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Local imports
 */

import App from './UI/Scenes/App';

// --------------------------------------
// Code

const root: ?Element = document.getElementById('root');

if (root != null) {
  ReactDOM.render(<App />, root);
}
