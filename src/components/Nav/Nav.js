import React, { Component } from 'react';
import './nav.scss';
import Search from './Search/Search';
import Signin from './Signin/Signin';
import './nav.scss'

class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        Nav
        <Search />
        <Signin />
      </div>
    );
  }
}

export default Nav;
