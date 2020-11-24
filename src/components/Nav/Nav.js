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
      isLoginOrSignupModalOn: false,
      clickedType: '',
    };
  }
  //함수 2개를 이용한 모달 on/off
  // openSignup = () => {
  //   console.log('click');
  //   this.setState({ isSignup: true });
  // };

  // closeSignup = () => {
  //   console.log('click');
  //   this.setState({ isSignup: false });
  // };

  //위 함수를 하나로 합침

  handleClickedType = (e) => {
    this.setState({ clickedType: e.target.innerText });
  };

  handleLoginOrSignupModal = (e) => {
    this.setState({
      isLoginOrSignupModalOn: !this.state.isLoginOrSignupModalOn,
    });
    this.handleClickedType(e);
  };
  //로그인 함수 2개
  // openLogin = () => {
  //   console.log('click');
  //   this.setState({ isLogin: true });
  // };

  // closeLogin = () => {
  //   this.setState({ isLogin: false });
  // };

  //위 함수 하나로 합침
  // handleLoginModal = () => {
  //   console.log('login');
  //   this.setState({
  //     isLogin: !this.state.isLogin,
  //     clickedType: e.target.innerText,
  //   });
  // };

  render() {
    const { isSignup, isLogin } = this.state;

    return (
      <div className='Nav'>
        Nav
        <Search />
        <span onClick={(e) => this.handleLoginOrSignupModal(e)}>로그인</span>
        <span onClick={(e) => this.handleLoginOrSignupModal(e)}>회원가입</span>
        {this.state.isLoginOrSignupModalOn && (
          <Signup
            handleClickedType={this.handleClickedType}
            handleLoginOrSignupModal={this.handleLoginOrSignupModal}
            clickedType={this.state.clickedType}
          />
        )}
      </div>
    );
  }
}

export default Nav;
