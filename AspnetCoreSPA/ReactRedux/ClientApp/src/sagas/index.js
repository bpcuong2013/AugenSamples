import { takeLatest } from 'redux-saga/effects';
import API from './/../services/api';
import Types from './../actions/types';

import { getContacts } from './ContactsSaga';

// Create our API at this level and feed it into
// the sagas that are expected to make API calls
// so there's only 1 copy app-wide!
// const api = API.create()
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield [
    // some sagas only receive an action
    takeLatest(Types.CONTACT_REQUEST, getContacts, api),    
  ];
}
