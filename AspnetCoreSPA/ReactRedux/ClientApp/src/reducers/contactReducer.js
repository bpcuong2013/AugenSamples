import { createReducer } from 'reduxsauce';
import Types from '../actions/types';

export const INITIAL_STATE = {
  fetching: false,
  contacts: [],
  pageTotal: 0,
  itemTotal: 0,
};

// request contacts result
const request = state => Object.assign({}, state, { fetching: true});

// receive contacts result
const receive = (state, { contacts, pageTotal, itemTotal }) =>
   Object.assign({}, state, {
     fetching: false,
     contacts: contacts,
     pageTotal: pageTotal,
     itemTotal: itemTotal
   });

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.CONTACT_REQUEST]: request,
  [Types.CONTACT_RECEIVE]: receive
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);