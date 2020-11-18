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

  render() {
    const { isSignup, closeSignup } = this.props;
    return (
      <>
      { isSignup ? (
        <div className='Signup' onClick={closeSignup}>
          <div className='modalContainer' onClick={isSignup}>
            <div className='wrapper'>
              <img
                src='/images/watchapediaTextCol.png'
                alt='gotchapediaLogoCol'
                className='gotchapediaLogoCol'
              />
              <div className='signupText'>회원가입</div>
              <form action='submit' className='signupForm'>
                <input type='text' className='name' placeholder='이름' />
                <input type='text' className='email' placeholder='이메일' />
                <input
                  type='password'
                  className='password'
                  placeholder='비밀번호'
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
        ) : null }
      </>
    );
  }
}

export default Signup;
