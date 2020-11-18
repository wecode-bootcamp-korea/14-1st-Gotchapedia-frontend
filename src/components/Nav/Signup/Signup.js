import React, { Component } from 'react';
import './signup.scss';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  checkValidation = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const checkName = name.length > 0;
    const checkEmail = email.includes('@');
    const checkPassword = password.length > 6;
    if (checkName && checkEmail && checkPassword) {
      // this.props.isSignup = false;
      console.log('okay');
    } else {
      return;
    }
    if (!checkName) {
      return alert('이름을 입력해주세요');
    }

    // fetch(API, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     password,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     if (result) {
    //       localStorage.setItem('token', result.token);
    //     } else {
    //       alert('아이디 확인하기');
    //     }
    //   })
    //   .catch((error) => console.log(error));
  };

  render() {
    const { isSignup, closeSignup } = this.props;
    return (
      <>
        {isSignup ? (
          <div className='Signup' onClick={closeSignup}>
            <div className='modalContainer' onClick={isSignup}>
              <div className='wrapper'>
                <img
                  src='/images/watchapediaTextCol.png'
                  alt='gotchapediaLogoCol'
                  className='gotchapediaLogoCol'
                />
                <div className='signupText'>회원가입</div>
                <form className='signupForm' onSubmit={this.checkValidation}>
                  <input
                    type='text'
                    className='name'
                    placeholder='이름'
                    onChange={this.handleNameChange}
                  />
                  <input
                    type='text'
                    className='email'
                    placeholder='이메일'
                    onChange={this.handleEmailChange}
                  />
                  <input
                    type='password'
                    className='password'
                    placeholder='비밀번호'
                    onChange={this.handlePasswordChange}
                  />
                  <button className='signupBtn'>회원가입</button>
                </form>
                <div className='loginText'>
                  이미 가입하셨나요? <span>로그인</span>
                </div>
                <div className='or'></div>
                <button className='kakaoBtn'>카카오 로그인</button>
                <button className='googleBtn'>구글 로그인</button>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Signup;
