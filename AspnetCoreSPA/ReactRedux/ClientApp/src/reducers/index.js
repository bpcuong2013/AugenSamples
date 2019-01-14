/* eslint-disable import/newline-after-import */
/* Combine all available reducers to a single root reducer.
 *
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ContactReducer from './contactReducer';

const combined = combineReducers(
  {
    routing: routerReducer,
    contacts: ContactReducer
  }
);

export default combined;
