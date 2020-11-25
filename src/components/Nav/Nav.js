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
    this.input = React.createRef();
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
    const { myData } = this.props;

    return (
      <>
        <div className='Nav'>
          <div className='navWrapper'>
            <div className='navLeft'>
              <img
                src='/images/gotchapediaText.png'
                alt='gotchapediaLogo'
                className='gotchapediaLogo'
              />
            </div>
            <div className='navRight'>
              <div className='magnifierIcon'>
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <div className='inputBox' ref={this.input}>
                <div className='searchIcon'>
                  <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className='searchInput'>
                  <Search searchData={myData} inputRef={this.input} />
                </div>
              </div>

              <button className='loginBtn' onClick={(e) => this.handleLoginOrSignupModal(e)}>
                로그인
              </button>
              <button className='signupBtn' onClick={(e) => this.handleLoginOrSignupModal(e)}>
                회원가입
              </button>
              <div className='starIcon'>
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className='rate'>평가하기</div>
              <img
                src='/images/profile.jpg'
                alt='profile'
                className='profile'
              />
            </div>
          </div>
        </div>
        {this.state.isLoginOrSignupModalOn && (
          <Signup
            handleClickedType={this.handleClickedType}
            handleLoginOrSignupModal={this.handleLoginOrSignupModal}
            clickedType={this.state.clickedType}
          />
        )}
      </>
    );
  }
}

export default Nav;
