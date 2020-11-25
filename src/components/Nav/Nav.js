import React, { Component } from 'react';
import Signup from './Signup/Signup';
import Search from './Search/Search';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './nav.scss';
import { MYPAGE_API, MYPAGE_TOKEN } from '../../config';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isLoginOrSignupModalOn: false,
      clickedType: '',
      searchData: {},
      userIsLoggedIn: localStorage.getItem('token') != null,
    };
    this.input = React.createRef();
  }

  componentDidMount() {
    fetch(MYPAGE_API, {
      method: 'GET',
      headers: {
        Authorization: MYPAGE_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ searchData: res.data }))
      .catch((error) => console.log('error', error));
  }

  handleClickedType = (e) => {
    this.setState({ clickedType: e.target.innerText });
  };

  handleLoginOrSignupModal = (e) => {
    this.setState({
      isLoginOrSignupModalOn: !this.state.isLoginOrSignupModalOn,
    });
    this.handleClickedType(e);
  };

  onLoginSuccess = () => {
    console.log('Login was successfully delegated.');
    this.setState({ userIsLoggedIn: true, isLoginOrSignupModalOn: false });
  };

  onSignupSuccess = () => {
    console.log('singup complete');
    this.setState({ isLoginOrSignupModalOn: false });
  };

  //임시 로그아웃
  logout = () => {
    localStorage.clear();
    alert('logged out');
    this.setState({ userIsLoggedIn: false });
  };

  render() {
    const { isSignup, isLogin, userIsLoggedIn, searchData } = this.state;

    var loginComponent = (
      <>
        <button
          className='loginBtn'
          onClick={(e) => this.handleLoginOrSignupModal(e)}>
          로그인
        </button>
        <button
          className='signupBtn'
          onClick={(e) => this.handleLoginOrSignupModal(e)}>
          회원가입
        </button>
      </>
    );

    if (this.state.userIsLoggedIn) {
      console.log('I got profile url : ' + localStorage.getItem('profile_url'));
      loginComponent = (
        <div onClick={this.logout}>
          <img
            className='gatchaNavProfile'
            src={localStorage.getItem('profile_url')}
          />
        </div>
      );
    }

    return (
      <>
        <div className='Nav'>
          <div className='navWrapper'>
            <div
              className='navLeft'
              onClick={() => {
                this.props.history.push('/');
              }}>
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
                  <Search searchData={searchData} inputRef={this.input} />
                </div>
              </div>
              {loginComponent}
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
            onLoginSuccess={this.onLoginSuccess}
            onSignupSuccess={this.onSignpSuccess}
          />
        )}
      </>
    );
  }
}

export default withRouter(Nav);
