import React, { Component } from 'react';
import './login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { isLogin, closeLogin } = this.props;
    return (
      <>
        {isLogin ? (
          <div className='Signup' onClick={closeLogin}>
            <div className='modalContainer' onClick={isLogin}>
              <div className='wrapper'>
                <img
                  src='/images/watchapediaTextCol.png'
                  alt='gotchapediaLogoCol'
                  className='gotchapediaLogoCol'
                />
                <div className='signupText'>로그인</div>
                <form action='submit' className='signupForm'>
                  <input type='text' className='email' placeholder='이메일' />
                  <input
                    type='password'
                    className='password'
                    placeholder='비밀번호'
                  />
                  <button className='signupBtn'>로그인</button>
                </form>
                <div className='lostPasswordText'>비밀번호를 잊어버리셨나요?</div>
                <div className='intoSignupText'>
                  계정이 없으신가요? <span>회원가입</span>
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

export default Login;
