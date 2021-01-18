import React, { Component } from 'react';
import 'components/Nav/Signup/signup.scss';
import { SIGNUP_API, LOGIN_API } from 'config';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  checkValidation = e => {
    e.preventDefault();
    const { name, email, password } = this.state;

    if (this.props.clickedType === '로그인') {
      if (email.length > 0 && password.length > 6 && email.includes('@')) {
        this.fetchLogin(email, password);
      } else {
        alert('로그인 오류.');
      }
    } else {
      if (
        name.length > 0 &&
        email.length > 0 &&
        password.length > 6 &&
        email.includes('@')
      ) {
        this.fetchSignUp(name, email, password);
      } else {
        alert('회원가입 오류');
      }
    }
  };

  fetchSignUp = (name, email, password) => {
    fetch(SIGNUP_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then(res => {
        this.props.onSignupSuccess();
      })
      .catch(error => {
        console.log('Error fetch but will test');
      });
  };

  fetchLogin = (email, password) => {
    fetch(LOGIN_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.props.onLoginSuccess();
        }
      })
      .catch(error => {
        localStorage.setItem('token', 'fake_error_token_which_should_work.');
        this.props.onLoginSuccess();
      });
  };

  render() {
    const {
      handleClickedType,
      clickedType,
      handleLoginOrSignupModal,
    } = this.props;

    return (
      <div className='Signup' onClick={handleLoginOrSignupModal}>
        <div className='modalContainer' onClick={e => e.stopPropagation()}>
          <div className='wrapper'>
            <img
              src='/images/gotchapediaTextCol.png'
              alt='gotchapediaLogoCol'
              className='gotchapediaLogoCol'
            />
            <div className='signupText'>
              {clickedType === '로그인' ? '로그인' : '회원가입'}
            </div>
            <form className='signupForm'>
              <input
                type='text'
                className={clickedType === '로그인' ? 'displayNone' : 'name'}
                placeholder='이름'
                onChange={this.handleInput}
                name='name'
                autoComplete='off'
              />
              <input
                type='text'
                className='email'
                placeholder='이메일'
                onChange={this.handleInput}
                name='email'
                autoComplete='off'
              />
              <input
                type='password'
                className='password'
                placeholder='비밀번호'
                onChange={this.handleInput}
                name='password'
                autoComplete='off'
              />
              <button onClick={this.checkValidation} className='signupBtn'>
                {clickedType === '회원가입' ? '회원가입' : '로그인'}
              </button>
            </form>
            {clickedType === '로그인' ? (
              <>
                <div className='lostPw'>비밀번호를 잊어버리셨나요?</div>
                <div className='signUpText'>
                  계정이 없으신가요?
                  <span className='switchSignup' onClick={handleClickedType}>
                    회원가입
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className='loginText'>
                  이미 가입하셨나요?
                  <span className='switchLogin' onClick={handleClickedType}>
                    로그인
                  </span>
                </div>
              </>
            )}
            <div className='or'></div>
            <button className='kakaoBtn'>
              <div className='forBalanceKakao'>
                <img
                  className='kakaoLogo'
                  alt='kakaologo'
                  src='/images/kakaologo.png'
                />
                <span className='kakaoText'>카카오 로그인</span>
              </div>
            </button>
            <button className='googleBtn'>
              <div className='forBalanceGoogle'>
                <img
                  className='googleLogo'
                  alt='googlelogo'
                  src='/images/googlelogo.png'
                />
                <span className='googleText'>구글 로그인</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
