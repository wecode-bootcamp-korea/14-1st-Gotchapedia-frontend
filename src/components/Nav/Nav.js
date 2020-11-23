import React, { Component } from 'react';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import Search from './Search/Search';
import LoginOrSignup from './Signup/LoginOrSignup';
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
  //함수 2개를 이용한 모달 on/off
  // openSignup = () => {
  //   this.setState({ isSignup: true });
  // };

  closeSignup = () => {
    console.log('click');
    this.setState({ isSignup: false });
  };

  //위 함수를 하나로 합침
  handleModal = () => {
    this.setState({ isSignup: !this.state.isSignup });
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
        {/* <LoginOrSignup /> */}
        {/* <Login /> */}
        {isLogin ? <Signup isLogin={isLogin}/> : <Signup isSignup={isSignup}/>

        }
        <Signup
          isLogin={isLogin}
          isSignup={isSignup}
          closeSignup={this.closeSignup}
        />
      </div>
    );
  }
}

export default Nav;
