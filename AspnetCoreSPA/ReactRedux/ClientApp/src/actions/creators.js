import Types from './types';

const requestContacts = searchParam => ({ type: Types.CONTACT_REQUEST, searchParam });
const receiveContacts = (contacts, pageTotal, itemTotal) => ({ type: Types.CONTACT_RECEIVE, contacts, pageTotal, itemTotal });

/**
 Makes available all the action creators we've created.
 */

export default {
  requestContacts,
  receiveContacts
};

