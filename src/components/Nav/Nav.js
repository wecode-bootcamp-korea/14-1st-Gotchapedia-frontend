import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Signup from 'components/Nav/Signup/Signup';
import Search from 'components/Nav/Search/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { MYPAGE_API, TOKEN } from 'config';
import 'components/Nav/nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isLoginOrSignupModalOn: false,
      clickedType: '',
      searchData: {},
      userIsLoggedIn: localStorage.getItem('token') != null,
      myUrl: '',
    };
    this.input = React.createRef();
  }

  componentDidMount() {
    fetch(MYPAGE_API, {
      method: 'GET',
      headers: {
        Authorization: TOKEN,
      },
    })
      .then(res => res.json())
      .then(res => this.setState({ searchData: res.data }))
      .catch(error => console.log('error', error));
  }

  handleClickedType = e => {
    this.setState({ clickedType: e.target.innerText });
  };

  handleLoginOrSignupModal = e => {
    this.setState({
      isLoginOrSignupModalOn: !this.state.isLoginOrSignupModalOn,
    });
    this.handleClickedType(e);
  };

  onLoginSuccess = () => {
    this.setState({ userIsLoggedIn: true, isLoginOrSignupModalOn: false });
  };

  onSignupSuccess = () => {
    alert('회원가입 완료');
    this.setState({ isLoginOrSignupModalOn: false });
  };

  logout = () => {
    localStorage.clear();
    alert('로그아웃 완료');
    this.setState({ userIsLoggedIn: false });
  };

  render() {
    const profileImg_LS = localStorage.getItem('profileImg');
    let loginComponent = (
      <>
        <button className='loginBtn' onClick={this.handleLoginOrSignupModal}>
          로그인
        </button>
        <button className='signupBtn' onClick={this.handleLoginOrSignupModal}>
          회원가입
        </button>
      </>
    );

    if (this.state.userIsLoggedIn) {
      loginComponent = (
        <>
          <div onClick={this.logout} className='logoutBtn'>
            로그아웃
          </div>
          <div>
            <img
              className='profileLS'
              onClick={() => {
                this.props.history.push('/mypage');
              }}
              src={
                !profileImg_LS ? '/images/defaultProfile.png' : profileImg_LS
              }
              alt='profileImg'
            />
          </div>
        </>
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
              }}
            >
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
                  <Search inputRef={this.input} />
                </div>
              </div>
              {loginComponent}
              <div className='starIcon'>
                <FontAwesomeIcon icon={faStar} />
              </div>
              <img
                onClick={() => {
                  this.props.history.push('/mypage');
                }}
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
            onSignupSuccess={this.onSignupSuccess}
          />
        )}
      </>
    );
  }
}

export default withRouter(Nav);
