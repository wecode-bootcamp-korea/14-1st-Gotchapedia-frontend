import React, { Component } from 'react';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import Search from './Search/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isSignup: false,
      isLogin: false,
    };
  }

  openSignup = () => {
    this.setState({ isSignup: true });
  };

  closeSignup = () => {
    this.setState({ isSignup: false });
  };

  openLogin = () => {
    this.setState({ isLogin: true });
  };

  closeLogin = () => {
    this.setState({ isLogin: false });
  };

  render() {
    const { isSignup, isLogin } = this.state;

    return (
      <div className='Nav'>
        Nav
        <Search />
        <Signup />
      </div>
    );
  }
}

export default Nav;
