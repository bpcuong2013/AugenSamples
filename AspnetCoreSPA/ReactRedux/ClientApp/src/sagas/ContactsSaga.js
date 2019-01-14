import { call, put } from 'redux-saga/effects';
import Actions from '../actions/creators';

export function* getContacts(api, action) {
  const { searchParam } = action;
  // make the call to the api
    const response = yield call(api.getContacts, searchParam);
    // check if response is success
    //alert(JSON.stringify(response));
  if (response.ok) {
      // dispatch successful receiving children    
    yield put(Actions.receiveContacts(response.data.contacts, response.data.pageTotal,response.data.itemTotal));
  } else {
    // dispatch failure    
    console.log('Error');
  }
}
