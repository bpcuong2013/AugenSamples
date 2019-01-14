import React from 'react';
import { Route } from 'react-router';
import Contacts from './components/Contacts';
import Home from './components/Home';

export default () => (
    <div className="content">
        <div className="header">
        <h3>ACME Contact Management</h3>
      </div>
    
      <div className = "container">   
        <Route path='' component={Home} /> 
        <Route path='/contacts' component={Contacts} />
      </div>
    </div>  
);
