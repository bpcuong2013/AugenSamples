// a library to wrap and simplify api calls
import apisauce from 'apisauce';
import config from './../config/base';

// our "constructor"
const create = (baseURL = config.host) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
    },
    // 10 second timeout...
    timeout: 10240
  });

  // ------
  // STEP 1
  // ------
  //call api

  // Get contacts by pageindex and search param
  const getContacts = searchParam  => api.post(`api/contacts/search`, searchParam);
  
  //
  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getContacts
  };
};

// let's return back our create method as the default.
export default {
  create
};
