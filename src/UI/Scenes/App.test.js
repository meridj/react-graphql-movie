// @flow

/**
 * Npm imports
 */

import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Local imports
 */

import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
