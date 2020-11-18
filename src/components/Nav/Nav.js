import React, { Component } from 'react';
import './nav.scss';
import Search from './Search/Search';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import './nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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
    const signUp = isSignup ? '' : 'displayNone';
    const loginOn = isLogin ? '' : 'displayNone';
    return (
      <>
        <div className='Nav'>
          <div className='navWrapper'>
            <div className='navLeft'>
              <img
                src='/images/watchaText.png'
                alt='gotchapediaLogo'
                className='gotchapediaLogo'
              />
              <div className='mytaste'>취향분석</div>
            </div>
            <div className='navRight'>
              <div className='magnifierIcon'>
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <div className='inputBox'>
                <div className='searchIcon'>
                  <FontAwesomeIcon icon={faSearch} />
                </div>
                <input
                  type='text'
                  className='searchInput'
                  placeholder='작품 제목,배우,감독을 검색해보세요.'
                />
              </div>

              <button className='loginBtn' onClick={this.openLogin}>
                로그인
              </button>
              <button className='signupBtn' onClick={this.openSignup}>
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
        <div className={signUp}>
          <Signup
            isSignup={this.state.isSignup}
            closeSignup={this.closeSignup}
          />
        </div>
        <div className={loginOn}>
          <Login isLogin={this.state.isLogin} closeLogin={this.closeLogin}/>
        </div>
      </>
    );
  }
}

export default Nav;
