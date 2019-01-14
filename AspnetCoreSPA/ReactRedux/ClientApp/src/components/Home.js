import React, { Component } from 'react';
import { Redirect } from 'react-router'
import './style.css';

export default class Home extends Component {  
  render() {    
    return <Redirect to='/contacts/1' />
  }
}