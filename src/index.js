// @flow

//
// ─── NPM IMPORTS ────────────────────────────────────────────────────────────────
//

import React from 'react';
import ReactDOM from 'react-dom';

//
// ─── LOCAL IMPORTS ──────────────────────────────────────────────────────────────
//

import App from './UI/Scenes/App';

//
// ─── CODE ───────────────────────────────────────────────────────────────────────
//

const root: ?Element = document.getElementById('root');

if (root != null) {
  ReactDOM.render(<App />, root);
}
